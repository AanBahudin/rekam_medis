import {
  CustomFormInput,
  InputForm,
  InputSelect,
  InputTextarea,
} from "../../components";
import { Form, redirect, useNavigation } from "react-router";
import customFetch from "../../utils/customFetch";
import { LoaderCircle } from "lucide-react";
import { addDataLinks } from "../../utils/constants";
import { useState } from "react";
import errorMsg from "../../utils/handleErrorMessage";
import { handleToast } from "../../utils/handleToast";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/medis", data);
    handleToast(1, 'Data ditambahkan', 'Silahkan cek rekam medis untuk melihat', 2000)
    return redirect(".");
  } catch (error) {
    const msgErr = errorMsg(error)
    handleToast(3, 'Terjadi Kesalahan', msgErr, 2000)
    return msgErr
  }
};

const AddData = () => {
  const [activeMenu, setMenu] = useState("first");
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = (date) => {
    const today = new Date();
    const birth = new Date(date);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    const dayDiff = today.getDate() - birth.getDate();

    // Jika bulan belum lewat, atau jika bulan sama tapi hari belum lewat
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    return age;
  };

  const handleInputChange = (e) => {
    const selectedDate = e.target.value;
    setBirthDate(selectedDate);

    if (selectedDate) {
      const calculatedAge = calculateAge(selectedDate);
      setAge(calculatedAge);
    } else {
      setAge(null); // Reset jika input kosong
    }
  };

  return (
    <Form
      method="POST"
      className="w-full h-[100%] grid grid-cols-12 gap-x-4 no-scrollbar "
    >
      {/* MENU SECTION */}
      <section className="col-span-3 py-4 rounded-md overflow-y-auto max-h-full bg-slate-50">
        <h1 className="px-4 mb-6 font-semibold text-2xl text-slate-700">
          Informasi pasien
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
      </section>

      {/* INPUT SECTION */}
      <section className="col-span-9 rounded-md overflow-y-auto max-h-[100%] bg-slate-50 p-6 flex flex-col justify-between">
        <div
          className={`w-full ${
            activeMenu === "first" ? "grid grid-cols-3" : "hidden"
          }  gap-x-4 gap-y-6`}
        >
          <InputForm
            inputName="nama"
            label="nama lengkap"
            placeholder="masukan nama pasien"
          />

          <section className="w-full flex flex-col">
            <label
              htmlFor="tanggalLahir"
              className="text-slate-700 font-semibold capitalize text-sm"
            >
              Tanggal lahir
            </label>
            <input
              type="date"
              name="tanggalLahir"
              autoComplete="off"
              value={birthDate}
              required
              onChange={handleInputChange}
              className="bg-transparent border-[2px] border-slate-400 px-2 py-3 rounded-lg placeholder:text-[12px] flex-1 outline-none text-[12px] focus:placeholder:text-transparent"
            />
          </section>
          <InputForm
            inputName="usia"
            label="usia"
            placeholder="masukan umur pasien"
            inputType="number"
            defaultValue={age || 0}
          />
          <InputSelect
            inputName="jenisKelamin"
            label="jenis kelamin"
            list={["Pria", "Wanita"]}
          />
          <InputForm
            inputName="nik"
            label="nomor induk keluarga"
            placeholder="masukan sesuai KTP"
          />
          <InputForm
            inputName="nomorTelepon"
            label="nomor telepon"
            placeholder="0824332"
          />
          <InputForm
            inputName="kebangsaan"
            label="kebangsaan"
            placeholder="Indonesia"
            defaultValue="Indonesia"
          />
          <InputSelect
            inputName="statusPernikahan"
            label="status pernikahan"
            list={["Menikah", "Belum Menikah", "Cerai"]}
          />
          <InputSelect
            inputName="agama"
            label="agama"
            list={["Islam", "Kristen", "Hindu", "Buddha", "Kong Hu Cu"]}
          />
          <InputForm
            inputName="alamat"
            label="alamat"
            placeholder="Jl. Gatot Subroto ..."
          />
          <InputForm inputName="kota" label="kota" placeholder="Baubau" />
          <InputForm
            inputName="kecamatan"
            label="kecamatan"
            placeholder="Wolio"
          />
          <InputForm
            inputName="kelurahan"
            label="kelurahan"
            placeholder="Bukit Wolio Indah"
          />
          <InputForm inputName="rt" label="rukun tetangga" placeholder="01" />
          <InputForm inputName="rw" label="rukun warga" placeholder="01" />
        </div>

        <div
          className={`w-full ${
            activeMenu === "second" ? "grid grid-cols-3" : "hidden"
          } gap-x-4 gap-y-6`}
        >
          <InputForm
            inputName="namaPenanggungJawab"
            label="nama penanggung jawab"
            placeholder="Asep"
          />
          <InputSelect
            inputName="hubunganPenanggungJawab"
            label="hubungan"
            list={[
              "Suami",
              "Istri",
              "Bapak",
              "Ibu",
              "Saudara",
              "Saudari",
              "Anak",
              "Kerabat",
            ]}
          />
          <InputForm
            inputName="nomorTeleponPenanggungJawab"
            label="nomor telepon"
            placeholder="0823893232973"
          />
          <InputForm
            inputName="alamatPenanggungJawab"
            label="alamat"
            placeholder="Jalan Gatot Subroto"
          />
          <InputForm
            inputName="kotaPenanggungJawab"
            label="kota"
            placeholder="Baubau"
          />
          <InputForm
            inputName="kecamatanPenanggungJawab"
            label="kecamatan"
            placeholder="Wolio"
          />
          <InputForm
            inputName="kelurahanPenanggungJawab"
            label="kelurahan"
            placeholder="Bukit Wolio Indah"
          />
          <InputForm
            inputName="rtPenanggungJawab"
            label="Rukun Tetangga"
            placeholder="01"
          />
          <InputForm
            inputName="rwPenanggungJawab"
            label="Rukun Warga"
            placeholder="01"
          />
        </div>

        <div
          className={`w-full ${
            activeMenu === "third" ? "grid grid-cols-3" : "hidden"
          } gap-x-4 gap-y-6`}
        >
          <InputForm
            inputName="tekananDarah"
            label="tekanan darah"
            placeholder="120"
          />
          <InputForm
            inputName="denyutNadi"
            label="denyut nadi"
            placeholder="60"
            inputType="number"
          />
          <InputForm
            inputName="RR"
            label="tingkat pernapasan"
            placeholder="15"
            inputType="number"
          />
          <InputForm
            inputName="suhuBadan"
            label="suhu badan"
            placeholder="35"
            inputType="number"
          />
          <InputForm
            inputName="skalaKesadaran"
            label="skala kesadaran (1-15)"
            placeholder="1"
            inputType="number"
          />
          <InputForm
            inputName="tinggiBadan"
            label="tinggi badan"
            placeholder="170"
            inputType="number"
          />
          <InputForm
            inputName="beratBadan"
            label="berat badan"
            placeholder="70"
            inputType="number"
          />
          <InputSelect
            inputName="golonganDarah"
            label="golongan darah"
            list={[
              "A",
              "A+",
              "A-",
              "AB",
              "AB+",
              "AB-",
              "B",
              "B+",
              "B-",
              "O",
              "O+",
              "O-",
            ]}
          />
        </div>

        <div
          className={`w-full ${
            activeMenu === "fourth" ? "grid grid-cols-3" : "hidden"
          } gap-x-4 gap-y-6`}
        >
          <InputSelect
            inputName="statusPsikologi"
            label="status psikologis"
            list={["stabil", "cemas", "depresi", "agitasi", "euforia"]}
          />
          <InputSelect
            inputName="statusEmosional"
            label="status emosional"
            list={["tenang", "mudah tersinggung", "marah", "sedih", "takut"]}
          />
          <InputSelect
            inputName="statusKesadaran"
            label="status kesadaran"
            list={["sadar penuh", "linglung", "delirium", "tidak sadar"]}
          />
          <InputSelect
            inputName="statusPerilaku"
            label="status perilaku"
            list={["kooperatif", "menarik diri", "agresif", "pasif"]}
          />
          <InputSelect
            inputName="statusKognitif"
            label="status kognitif"
            list={[
              "normal",
              "gangguan konsentrasi",
              "gangguan ingatan",
              "gangguan delusi",
              "gangguan halusinasi",
            ]}
          />
          <InputSelect
            inputName="statusSosial"
            label="status sosial"
            list={[
              "sangat baik",
              "baik",
              "cukup baik",
              "kurang baik",
              "tidak baik",
            ]}
          />
          <InputSelect
            inputName="hubunganDenganKeluarga"
            label="hubungan keluarga"
            list={[
              "sangat baik",
              "baik",
              "cukup baik",
              "kurang baik",
              "tidak baik",
            ]}
          />
          <InputSelect
            inputName="tinggalBersama"
            label="tinggal bersama"
            list={[
              "orang tua",
              "Berkeluarga",
              "kerabat",
              "mengontrak/menumpang",
              "sendirian",
            ]}
          />
          <InputSelect
            inputName="statusEkonomi"
            label="status ekonomi"
            list={[
              "sangat baik",
              "baik",
              "cukup baik",
              "kurang baik",
              "tidak baik",
            ]}
          />
          <InputForm
            inputName="bahasa"
            label="bahasa yang digunakan"
            placeholder="Indonesia"
          />
        </div>

        <div
          className={`w-full ${
            activeMenu === "fifth" ? "grid grid-cols-2" : "hidden"
          } gap-x-4 gap-y-6`}
        >
          <InputTextarea
            inputName="keluhanPenyakit"
            label="Keluhan penyakit"
            placeholder="apa keluhan penyakit pasien"
          />
          <InputTextarea
            inputName="riwayatPenyakit"
            label="riwayat penyakit"
            placeholder="apakah ada riwayat penyakit"
          />
          <InputTextarea
            inputName="penyakitTurunan"
            label="penyakit turunan"
            placeholder="penyakit turunan pasien"
          />
          <InputTextarea
            inputName="riwayatOperasi"
            label="riwayat operasi terakhir"
            placeholder="apakah ada riwayat operasi"
          />
          <InputTextarea
            inputName="alergi"
            label="riwayat alergi"
            placeholder="riwayat alergi pasien"
          />
          <InputTextarea
            inputName="penyakitDiderita"
            label="penyakit bawaan / sedang diderita"
            placeholder="penyakit bawaan pasien"
          />
          <InputTextarea
            inputName="pengobatanBerjalan"
            label="riwayat pengobatan terakhir"
            placeholder="pengobatan terakhir yang dikonsumsi"
          />
        </div>

        <div
          className={`w-full ${
            activeMenu === "sixth" ? "grid grid-cols-1" : "hidden"
          } gap-x-4 gap-y-6`}
        >
          <InputSelect
            inputName="kondisiBerjalan"
            label="apakah jalan tidak seimbang?"
            list={["ya", "kadang", "tidak"]}
          />
          <InputSelect
            inputName="menggunakanAlatBantu"
            label="apakah menggunakan alat bantu?"
            list={["ya", "kadang", "tidak"]}
          />
          <InputSelect
            inputName="penurunanBeratBadan"
            label="apakah ada penurunan berat badan yang tidak diinginkan 6 bulan terakhir?"
            list={["ya", "kadang", "tidak"]}
          />
          <InputSelect
            inputName="penurunanNafsuMakan"
            label="apakah ada penurunan nafsu makan?"
            list={["ya", "kadang", "tidak"]}
          />
        </div>

        <div
          className={`w-full ${
            activeMenu === "seventh" ? "grid grid-cols-2" : "hidden"
          } gap-x-4 gap-y-6`}
        >
          <InputTextarea
            inputName="tambahanPertama"
            label="Informasi tambahan 1"
            placeholder="informasi tambahan 1"
            isRequired={false}
          />
          <InputTextarea
            inputName="tambahanKedua"
            label="Informasi tambahan 2"
            placeholder="informasti tambahan 2"
            isRequired={false}
          />
        </div>

        <div
          className={`w-full ${
            activeMenu === "eighth" ? "grid grid-cols-2" : "hidden"
          } gap-x-4 gap-y-6`}
        >
          <InputSelect
            inputName="statusResiko"
            label="resiko penyakit pasien"
            list={["Tinggi", "Sedang", "Rendah"]}
          />
          <InputSelect
            inputName="infeksiMenular"
            label="resiko infeksi menular"
            list={["Tinggi", "Sedang", "Rendah"]}
          />
          <InputSelect
            inputName="kronis"
            label="resiko penyakit kronis"
            list={["Tinggi", "Sedang", "Rendah"]}
          />
          <InputSelect
            inputName="penyakitMenular"
            label="resiko penyakit menular"
            list={["Tinggi", "Sedang", "Rendah"]}
          />
          <InputSelect
            inputName="tujuanBerobat"
            label="tujuan kunjungan"
            list={["Berobat", "Konsultasi", "Kontrol", "Rawat Inap"]}
          />
          {/* <InputSelect inputName='pemeriksaanLanjutan' label='resiko penyakit pasien' list={['Tinggi', 'Sedang', 'Rendah']} /> */}
          <InputSelect
            inputName="pemeriksa"
            label="identitas pemeriksa"
            list={["Perawat 1", "Perawat 2", "Perawat 3"]}
          />
        </div>

        <button
          disabled={isSubmitting}
          className={`self-end bg-blueCard/80 w-[10vw] text-sm py-2 rounded-md text-slate-700 ${
            activeMenu === "eighth" ? "flex items-center" : "hidden"
          } gap-x-2 justify-center`}
        >
          {isSubmitting && (
            <LoaderCircle size={20} className="animate-spin stroke-white" />
          )}
          {isSubmitting ? "Menambahkan ..." : "Selesai"}
        </button>
      </section>
    </Form>
  );
};

export default AddData;
