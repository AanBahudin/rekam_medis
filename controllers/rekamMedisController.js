import { StatusCodes } from "http-status-codes";
import RekamMedis from "../models/PasienModel.js";
import mongoose from "mongoose";

export const statsData = async (req, res) => {
  const totalPasien = await RekamMedis.countDocuments();
  const totalResiko = await RekamMedis.aggregate([
    {
      $group: {
        _id: "$statusResiko",
        count: { $sum: 1 },
      },
    },
  ]);

  const rasioGender = await RekamMedis.aggregate([
    {
      $group: {
        _id: "$jenisKelamin",
        count: { $sum: 1 },
      },
    },
  ]);
  const pasienTerbaru = await RekamMedis.find({}).sort({ createdAt: -1 });

  return res
    .status(StatusCodes.OK)
    .json({ totalPasien, totalResiko, rasioGender, pasienTerbaru });
};

export const createData = async (req, res) => {
  req.body.createdBy = req.user.userId;
  await RekamMedis.create(req.body);
  return res.status(StatusCodes.OK).json({ msg: "pasien di input" });
};

export const getAllData = async (req, res) => {
  const currentPage = Number(req.query.page) || 1;
  const limit = 10;
  const skip = (currentPage - 1) * limit;

  // setting filter
  const { page, ...newFilter } = req.query;
  console.log(newFilter);

  const data = await RekamMedis.find(newFilter).skip(skip).limit(limit);
  const countDocument = await RekamMedis.find(newFilter).countDocuments();

  const numOfPages = Math.ceil(countDocument / limit);

  return res
    .status(StatusCodes.OK)
    .json({ pasien: data, currentPage: currentPage, numOfPages });
};

export const getSingleData = async (req, res) => {
  const rekamMedis = await RekamMedis.findOne({ _id: req.params.id });

  return res.status(StatusCodes.OK).json({ rekamMedis });
};

export const updateData = async (req, res) => {
  const { id } = req.params;
  await RekamMedis.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });
  return res.status(StatusCodes.OK).json({ msg: "Berhasil diupdate" });
};

export const deleteData = async (req, res) => {
  const { id } = req.params;
  await RekamMedis.findOneAndDelete({ _id: id });
  return res.status(StatusCodes.OK).json({ msg: "user deleted!" });
};

export const addKunjungan = async (req, res) => {
  const { id } = req.params;
  const user = await RekamMedis.findOneAndUpdate(
    { _id: id },
    { $push: { riwayatKunjungan: req.body } },
    { new: true, runValidators: true }
  );
  return res.status(StatusCodes.OK).json({ msg: "Okay" });
};
