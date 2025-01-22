import {
  IdCard,
  CircleUser,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { TableData } from "../../components";
import customFetch from "../../utils/customFetch";
import { toast } from "react-toastify";
import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router";
import { useAdminContext } from "./AdminLayout";
import { useEffect } from "react";

export const loader = async ({ request }) => {
  const url = new URL(request.url);

  // Ambil semua query params
  const params = url.searchParams.toString();
  try {
    const { data } = await customFetch.get(`/medis?${params}`);
    return data;
  } catch (error) {
    toast.error(error.response.data.msg);
    return error;
  }
};

const AllData = () => {
  const data = useLoaderData();
  const { search } = useLocation();
  const { filter, setFilter, handleFilterChange, handleSearch, removeFilter, handlePageChange } = useAdminContext()

  // ambil semua filter jika direfresh untuk menjaga agar filternya tidak hilang
  useEffect(() => {
    const queryParams = Object.fromEntries(new URLSearchParams(search));
    setFilter((prev) => ({...prev, ...queryParams}))
  }, [])

  return (
    <section className="w-full flex flex-col items-start justify-center pb-20">
      <h1 className="text-xl mb-2 font-medium">Pencarian Rekam Medis</h1>
      <article className="w-full bg-white rounded-lg shadow-lg px-4 py-6">
        <div className="w-full flex gap-x-4 items-start justify-end">
          {/* DIAKTIFKAN JIKA NOMOR REKAM MEDIS DIATUR MENJADI AUTO INCREMENT */}
          {/* <div className="w-[40%] flex flex-col gap-y-1">
            <label htmlFor="" className="text-[14px] font-medium">
              rekam medis
            </label>
            <div className="flex bg-lightGrey px-2 w-full rounded-md items-center">
              <Search size={20} />
              <input
                onChange={(event) => handleFilterChange(event, "_id")}
                value={filter._id}
                type="text"
                placeholder="468749"
                className={`px-2 py-3 bg-lightGrey ml-2 rounded-sm placeholder:text-[12px] flex-1 outline-none text-[12px]`}
              />
            </div>
          </div> */}

          <div className="w-[40%] flex flex-col gap-y-1">
            <label htmlFor="" className="text-[14px] font-medium">
              NIK
            </label>
            <div className="flex bg-lightGrey px-2 w-full rounded-md items-center">
              <IdCard size={20} />
              <input
                onChange={(event) => handleFilterChange(event, "nik")}
                value={filter.nik}
                type="text"
                placeholder="nomor induk keluarga"
                className={`px-2 py-3 bg-lightGrey ml-2 rounded-sm placeholder:text-[12px] flex-1 outline-none text-[12px]`}
              />
            </div>
          </div>

          <div className="w-[40%] flex flex-col gap-y-1">
            <label htmlFor="" className="text-[14px] font-medium">
              nama
            </label>
            <div className="flex bg-lightGrey px-2 w-full rounded-md items-center">
              <CircleUser className="stroke-greyPrimary" size={20} />
              <input
                onChange={(event) => handleFilterChange(event, "nama")}
                value={filter.nama}
                type="text"
                placeholder="nama pasien"
                className={`px-2 py-3 bg-lightGrey ml-2 rounded-sm placeholder:text-[12px] flex-1 outline-none text-[12px]`}
              />
            </div>
          </div>

          <div className="w-[10%] flex flex-col gap-y-1">
            <label htmlFor="" className="text-[14px] font-medium invisible">
              Cari data
            </label>
            <button
              onClick={removeFilter}
              type="reset"
              className="text-center text-slate-700 text-sm px-2 py-3 rounded-md cursor-default bg-redCard/80"
            >
              Hapus
            </button>
          </div>

          <div className="w-[10%] flex flex-col gap-y-1">
            <label htmlFor="" className="text-[14px] font-medium invisible">
              Cari data
            </label>
            <button
              onClick={handleSearch}
              type="submit"
              className="text-center text-slate-700 text-sm px-2 py-3 rounded-md cursor-default bg-blueCard/80"
            >
              Search
            </button>
          </div>
        </div>

        <div className="w-full flex gap-x-4 items-center justify-between mt-6">
          <div className="w-[20%] flex flex-col gap-y-1 rounded-lg">
            <label htmlFor="" className="text-[14px] font-medium">
              Gender
            </label>
            <select
              onChange={(event) => handleFilterChange(event, "jenisKelamin")}
              value={filter.jenisKelamin}
              name=""
              id=""
              className={`px-2 py-3 bg-lightGrey rounded-sm placeholder:text-[12px] flex-1 outline-none text-[12px]`}
            >
              <option value="">Semua</option>
              <option value="Pria">Pria</option>
              <option value="Wanita">Wanita</option>
            </select>
          </div>

          <div className="w-[20%] flex flex-col gap-y-1">
            <label htmlFor="" className="text-[14px] font-medium">
              Tujuan
            </label>
            <div className="flex bg-lightGrey w-full rounded-md items-center">
              <select
                onChange={(event) => handleFilterChange(event, "tujuanBerobat")}
                value={filter.tujuanBerobat}
                name=""
                id=""
                className={`px-2 py-3 bg-lightGrey rounded-sm placeholder:text-[12px] flex-1 outline-none text-[12px]`}
              >
                <option value="">Semua</option>
                <option value="Berobat">Berobat</option>
                <option value="Konsultasi">Konsultasi</option>
                <option value="Kontrol">Kontrol</option>
                <option value="Rawat Inap">Rawat Inap</option>
              </select>
            </div>
          </div>

          <div className="w-[20%] flex flex-col gap-y-1">
            <label htmlFor="" className="text-[14px] font-medium">
              Status
            </label>
            <select
              onChange={(event) => handleFilterChange(event, "status")}
              value={filter.status}
              name=""
              id=""
              className={`px-2 py-3 bg-lightGrey rounded-sm placeholder:text-[12px] flex-1 outline-none text-[12px]`}
            >
              <option value="">Semua</option>
              <option value="Ditangani">Ditangani</option>
              <option value="Proses">Proses</option>
              <option value="Belum Ditangani">Belum Ditangani</option>
            </select>
          </div>

          <div className="w-[20%] flex flex-col gap-y-1">
            <label htmlFor="" className="text-[14px] font-medium">
              Tanggal daftar
            </label>
            <input
              onChange={(event) => handleFilterChange(event, "createdAt")}
              value={filter.createdAt}
              type="date"
              name=""
              id=""
              className={`px-2 py-3 bg-lightGrey rounded-sm placeholder:text-[12px] flex-1 outline-none text-[12px]`}
            />
          </div>

          <div className="w-[20%] flex flex-col gap-y-1">
            <label htmlFor="" className="text-[14px] font-medium">
              Gol Darah
            </label>
            <select
              onChange={(event) => handleFilterChange(event, "golonganDarah")}
              value={filter.golonganDarah}
              name=""
              id=""
              className={`px-2 py-3 bg-lightGrey rounded-sm placeholder:text-[12px] flex-1 outline-none text-[12px]`}
            >
              <option value="">Semua</option>
              <option value="A">A</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B">B</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB">AB</option>
              <option value="B+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O">O</option>
            </select>
          </div>
        </div>
      </article>

      <article className="w-full bg-white rounded-lg shadow-lg px-4 py-6 mt-6">
        {/* title and info */}
        <div className="w-full flex justify-between items-center">
          <h3 className="text-xl font-medium tracking-wide">Data Pasien</h3>
          <h5 className="text-sm tracking-wide text-greySecondary flex gap-x-4 items-center justify-center">
            <button
              onClick={() =>
                handlePageChange(
                  data.currentPage === 1
                    ? data.currentPage
                    : data.currentPage - 1
                )
              }
            >
              <ChevronLeft
                size={20}
                className={`${
                  data.currentPage === 1
                    ? "stroke-greyPrimary"
                    : "hover:stroke-blue-500 duration-200 ease-in-out"
                }`}
              />
            </button>
            <span className="text-blue-500">{data.currentPage}</span> of{" "}
            <span className="text-blue-500">{data.numOfPages}</span>
            <button
              onClick={() =>
                handlePageChange(
                  data.currentPage === data.numOfPages
                    ? data.currentPage
                    : data.currentPage + 1
                )
              }
              disabled={data.currentPage === data.numOfPages}
            >
              <ChevronRight
                size={20}
                className={`${
                  data.currentPage === data.numOfPages
                    ? "stroke-greyPrimary"
                    : "hover:stroke-blue-500 duration-200 ease-in-out"
                }`}
              />
            </button>
          </h5>
        </div>

        {/* table header */}
        <div className="w-full flex items-center gap-x-2 mt-8">
          <p className="text-sm font-medium w-[15%]">Rekam medis</p>
          <p className="text-sm font-medium w-[15%]">Nama</p>
          <p className="text-sm font-medium w-[10%]">Gender</p>
          <p className="text-sm font-medium w-[12%]">Tujuan</p>
          <p className="text-sm font-medium w-[10%] truncate text-center">
            Resiko
          </p>
          <p className="text-sm font-medium w-[15%] text-center">NIK</p>
          <p className="text-sm font-medium w-[15%] text-center">Registrasi</p>
          <p className="text-sm font-medium w-[13%] text-center">Status</p>
        </div>

        {/* isi data */}
        <div className="w-full mt-8 flex flex-col gap-y-1">
          {data.pasien.map((item, index) => {
            return <TableData key={index} {...item} />;
          })}
        </div>
      </article>
    </section>
  );
};

export default AllData;
