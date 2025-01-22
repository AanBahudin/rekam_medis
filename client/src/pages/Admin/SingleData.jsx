import React, { useState } from "react";
import { Plus, Edit, ShieldAlert } from "lucide-react";
import { addDataLinks } from "../../utils/constants";
import { BigDataContainer, Data, DataContainer } from "../../components";
import customFetch from "../../utils/customFetch";
import { Form, Link, redirect, useLoaderData } from "react-router";
import { toast } from "react-toastify";
import moment from "moment";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.delete(`/medis/${data.id}`);
    toast.success("Data dihapus");
    return redirect("/admin/all-data");
  } catch (error) {
    toast.error(error.response.data.msg);
    return error;
  }
};

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/medis/${params.id}`);
    return data;
  } catch (error) {
    return error;
  }
};

const SingleData = () => {
  const [activeMenu, setMenu] = useState("first");
  const { rekamMedis } = useLoaderData();

  const { riwayatKunjungan } = rekamMedis;
  console.log(riwayatKunjungan);

  const formattedDate = (tanggal) => {
    return tanggal.split("T")[0];
  };

  return (
    <Form
      method="POST"
      className="w-full h-[100%] grid grid-cols-12 gap-x-4 no-scrollbar "
    >
      {/* MENU SECTION */}
      <section className="col-span-3 py-4 rounded-xl shadow-lg overflow-y-auto no-scrollbar max-h-full bg-slate-50">
        <h1 className="px-4 mb-6 font-semibold text-2xl text-slate-700">
          Detail pasien
        </h1>
        {/* LINK CONTAINER */}
        <article className="w-full max-h-full flex flex-col gap-y-1">
          {addDataLinks.map((item, index) => {
            return (
              <h1
                key={index}
                onClick={() => setMenu(item.path)}
                className={`w-full ${
                  activeMenu === item.path
                    ? "bg-blueCard text-slate-800"
                    : "hover:bg-blueCard/20"
                } px-4 py-4 select-none cursor-default text-slate-700 text-sm rounded-md duration-200 ease-in-out`}
              >
                {item.title}
              </h1>
            );
          })}
        </article>
        {riwayatKunjungan.length !== 0 && (
          <h1
            onClick={() => setMenu("nineth")}
            className={`w-full ${
              activeMenu === "nineth"
                ? "bg-blueCard text-slate-800"
                : "hover:bg-blueCard/20"
            } px-4 py-4 select-none cursor-default text-slate-700 text-sm rounded-md duration-200 ease-in-out`}
          >
            Riwayat Kunjungan
          </h1>
        )}
      </section>

      {/* INPUT SECTION */}
      <section className="col-span-9 rounded-md overflow-y-auto bg-slate-50 p-6 flex flex-col justify-between">
        <div
          className={`w-full ${
            activeMenu === "first" ? "grid grid-cols-3" : "hidden"
          }  gap-x-4 gap-y-6`}
        >
          <DataContainer label="Nomor Rekam Medis" value={rekamMedis._id} />
          <DataContainer
            label="Nomor Rekam Medis"
            value={formattedDate(rekamMedis.tanggalLahir)}
          />
          <DataContainer label="Nomor Rekam Medis" value={rekamMedis.usia} />
          <DataContainer
            label="Jenis kelamin"
            value={rekamMedis.jenisKelamin}
          />
          <DataContainer label="Nomor induk keluarga" value={rekamMedis.nik} />
          <DataContainer
            label="nomor telepon"
            value={rekamMedis.nomorTelepon}
          />
          <DataContainer label="kebangsaan" value={rekamMedis.kebangsaan} />
          <DataContainer
            label="status pernikahan"
            value={rekamMedis.statusPernikahan}
          />
          <DataContainer label="agama" value={rekamMedis.agama} />
          <DataContainer label="alamat" value={rekamMedis.alamat} />
          <DataContainer label="kota" value={rekamMedis.kota} />
          <DataContainer label="kecamatan" value={rekamMedis.kecamatan} />
          <DataContainer label="kelurahan" value={rekamMedis.kelurahan} />
          <DataContainer label="Rukun Tetangga" value={rekamMedis.rt} />
          <DataContainer label="Rukun warga" value={rekamMedis.rw} />
        </div>

        <div
          className={`w-full ${
            activeMenu === "second" ? "grid grid-cols-3" : "hidden"
          } gap-x-4 gap-y-6`}
        >
          <DataContainer
            label="nama penanggung jawab"
            value={rekamMedis.namaPenanggungJawab}
          />
          <DataContainer
            label="Hubungan dengan pasien"
            value={rekamMedis.hubunganPenanggungJawab}
          />
          <DataContainer
            label="kontak penanggung jawab"
            value={rekamMedis.nomorTeleponPenanggungJawab}
          />
          <DataContainer
            label="alamat"
            value={rekamMedis.alamatPenanggungJawab}
          />
          <DataContainer
            label="kota domisili"
            value={rekamMedis.kotaPenanggungJawab}
          />
          <DataContainer
            label="kecamatan domisili"
            value={rekamMedis.kecamatanPenanggungJawab}
          />
          <DataContainer
            label="kelurahan domisili"
            value={rekamMedis.kelurahanPenanggungJawab}
          />
          <DataContainer
            label="Rukun Tetangga"
            value={rekamMedis.rtPenanggungJawab}
          />
          <DataContainer
            label="Rukun Warga"
            value={rekamMedis.rwPenanggungJawab}
          />
        </div>

        <div
          className={`w-full ${
            activeMenu === "third" ? "grid grid-cols-3" : "hidden"
          } gap-x-4 gap-y-6`}
        >
          <DataContainer
            label="Tekanan Darah"
            value={rekamMedis.tekananDarah}
          />
          <DataContainer label="Denyut Nadi" value={rekamMedis.denyutNadi} />
          <DataContainer label="Respiratory Rate" value={rekamMedis.RR} />
          <DataContainer label="Suhu Badan" value={rekamMedis.suhuBadan} />
          <DataContainer
            label="skala kesadaran"
            value={rekamMedis.skalaKesadaran}
          />
          <DataContainer label="tinggi badan" value={rekamMedis.tinggiBadan} />
          <DataContainer label="berat badan" value={rekamMedis.beratBadan} />
          <DataContainer
            label="golongan darah"
            value={rekamMedis.golonganDarah}
          />
        </div>

        <div
          className={`w-full ${
            activeMenu === "fourth" ? "grid grid-cols-3" : "hidden"
          } gap-x-4 gap-y-6`}
        >
          <DataContainer
            label="status psikologi"
            value={rekamMedis.statusPsikologi}
          />
          <DataContainer
            label="status emosional"
            value={rekamMedis.statusEmosional}
          />
          <DataContainer
            label="status kesadaran"
            value={rekamMedis.statusKesadaran}
          />
          <DataContainer
            label="status perilaku"
            value={rekamMedis.statusPerilaku}
          />
          <DataContainer
            label="status kognitif"
            value={rekamMedis.statusKognitif}
          />
          <DataContainer
            label="status sosial"
            value={rekamMedis.statusSosial}
          />
          <Data
            label="hubungan keluarga"
            value={rekamMedis.hubunganDenganKeluarga}
          />
          <DataContainer
            label="tinggal bersama"
            value={rekamMedis.tinggalBersama}
          />
          <DataContainer
            label="status ekonomi"
            value={rekamMedis.statusEkonomi}
          />
          <DataContainer label="bahasa sehari hari" value={rekamMedis.bahasa} />
        </div>

        <div
          className={`w-full ${
            activeMenu === "fifth" ? "grid grid-cols-2" : "hidden"
          } gap-x-4 gap-y-6`}
        >
          <BigDataContainer
            label="keluhan pasien"
            value={rekamMedis.keluhanPenyakit}
          />
          <BigDataContainer
            label="Riwayat sakit sebelumnya"
            value={rekamMedis.riwayatPenyakit}
          />
          <BigDataContainer
            label="riwayat penyakit turunan"
            value={rekamMedis.penyakitTurunan}
          />
          <BigDataContainer
            label="riwayat operasi"
            value={rekamMedis.riwayatOperasi}
          />
          <BigDataContainer label="riwayat alergi" value={rekamMedis.alergi} />
          <BigDataContainer
            label="penyakit yang sedang diderita"
            value={rekamMedis.penyakitDiderita}
          />
          <BigDataContainer
            label="Obat yang sedang dikonsumsi"
            value={rekamMedis.pengobatanBerjalan}
          />
        </div>

        <div
          className={`w-full ${
            activeMenu === "sixth" ? "grid grid-cols-1" : "hidden"
          } gap-x-4 gap-y-6`}
        >
          <DataContainer
            label="Apakah jalan tidak seimbang?"
            value={rekamMedis.kondisiBerjalan}
          />
          <DataContainer
            label="Apakah menggunakan alat bantu?"
            value={rekamMedis.menggunakanAlatBantu}
          />
          <DataContainer
            label="Apakah ada penurunan berat badan yang tidak dinginkan 6 bulan terakhir?"
            value={rekamMedis.penurunanBeratBadan}
          />
          <DataContainer
            label="Apakah ada penurunan nafsu makan?"
            value={rekamMedis.penurunanNafsuMakan}
          />
        </div>
        <div
          className={`w-full ${
            activeMenu === "seventh" ? "grid grid-cols-2" : "hidden"
          } gap-x-4 gap-y-6`}
        >
          <BigDataContainer
            label="Informasi tambahan 1"
            value={rekamMedis.tambahanPertama}
          />
          <BigDataContainer
            label="Informasi tambahan 2"
            value={rekamMedis.tambahanKedua}
          />
        </div>

        <div
          className={`w-full ${
            activeMenu === "eighth" ? "grid grid-cols-2" : "hidden"
          } gap-x-4 gap-y-6`}
        >
          <DataContainer label="Pemeriksa" value={rekamMedis.pemeriksa} />
          <DataContainer
            label="Tujuan kunjungan"
            value={rekamMedis.tujuanBerobat}
          />
          <DataContainer
            label="Status resiko penyakit"
            value={rekamMedis.statusResiko}
          />
          <DataContainer
            label="kemungkinan terjadi infeksi menular"
            value={rekamMedis.infeksiMenular}
          />
          <DataContainer
            label="kemungkinan penyakit kronis"
            value={rekamMedis.kronis}
          />
          <DataContainer
            label="kemungkinan terjadi penularan penyakit"
            value={rekamMedis.penyakitMenular}
          />
        </div>

        <div
          className={`w-full ${
            activeMenu === "nineth" ? "flex flex-col gap-y-1" : "hidden"
          } gap-x-4 gap-y-6 overflow-y-auto no-scrollbar`}
        >
          <div className="flex gap-x-4 mr-auto w-fit mb-4 justify-end items-center">
            <Link
              to={`/admin/tambah_kunjungan/${rekamMedis._id}`}
              className="text-[12px] w-[8vw] flex items-center justify-center gap-x-2 bg-blueCard px-4 py-2 rounded-md"
            >
              <Plus size={15} className="stroke-greyPrimary" /> Kunjungan
            </Link>
            <Link
              to={`/admin/edit/${rekamMedis._id}`}
              className="text-[12px] w-[8vw] flex items-center justify-center gap-x-2 bg-blueCard px-4 py-2 rounded-md"
            >
              <Edit size={15} className="stroke-greyPrimary" /> Pasien
            </Link>
            {/* <Form method="POST">
              <input type="hidden" name="id" value={rekamMedis._id} />
              <button className="text-[12px] w-[8vw] flex items-center justify-center gap-x-2 bg-redCard px-4 py-2 rounded-md">
                <Trash size={15} className="stroke-greyPrimary" /> Hapus
              </button>
            </Form> */}
          </div>
          {riwayatKunjungan.map((item, index) => {
            return (
              <Link
                to={`/admin/kunjungan/${rekamMedis._id}/${item._id}`}
                key={index}
                className="bg-slate-200/50 cursor-default hover:bg-slate-200/80 w-full px-10 flex-1 flex items-center justify-between rounded-xl p-4 min-h-[15vh] hover:shadow-lg duration-200 ease-in-out"
              >
                <div className="flex flex-col gap-y-2">
                  <h2 className=" font-semibold text-slate-700">
                    {moment(item.tanggalKunjungan).format("LL")}
                  </h2>

                  <div className="flex items-center">
                    <ShieldAlert
                      size={25}
                      className={`p-1 rounded-md ${
                        item.statusResiko === "Tinggi"
                          ? "bg-red-300"
                          : item.statusResiko === "Sedang"
                          ? "bg-yellowCard"
                          : "bg-blueCard"
                      }`}
                    />
                    <h1
                      className={`text-slate-800 tracking-wide w-fit px-4 py-1 rounded-full text-sm font-medium`}
                    >
                      Resiko {item.statusResiko}
                    </h1>
                  </div>
                </div>

                <h1 className="text-xl font-semibold text-slate-700">
                  {item.perihalKunjungan}
                </h1>
              </Link>
            );
          })}
        </div>
      </section>
    </Form>
  );
};

export default SingleData;