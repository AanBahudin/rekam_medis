import { Book, Home, BookPlus, User, Users, ShieldAlert, ShieldMinus, ShieldPlus  } from 'lucide-react'

export const links = [
    {
        name: 'Beranda',
        icon: <Home /> ,
        path: '.'
    },
    {
        name: 'Rekam Medis',
        icon: <Book /> ,
        path: 'all-data'
    },
    {
        name: 'Tambah',
        icon: <BookPlus /> ,
        path: 'add-data'
    },
    {
        name: 'Profil',
        icon: <User />,
        path: 'profile'
    },
]

export const statsCardData = [
    {
        title: 'Total Pasien',
        icon: <Users size={20} />,
        color: 'bg-blueCard',
        total: 1605
    },
    {
        title: 'Resiko Tinggi',
        icon: <ShieldAlert size={20} />,
        color: 'bg-redCard',
        total: 452
    },
    {
        title: 'Resiko Sedang',
        icon: <ShieldMinus size={20} />,
        color: 'bg-yellowCard',
        total: 302
    },
    {
        title: 'Resiko Rendah',
        icon: <ShieldPlus size={20} />,
        color: 'bg-greenCard',
        total: 851
    },
]

export const activityData = [
    {
        title: "Pasien Baru",
        desc: "menambahkan pasien baru",
        user: "Zero Leo",
        idPasien: "379gsdfh3r",
        waktu: "Baru saja"
    },
    {
        title: "Pasien Baru",
        desc: "menambahkan pasien baru",
        user: "Dumbo Gosh",
        idPasien: "wf34wefsd",
        waktu: "8 menit yang lalu"
    },
    {
        title: "Pasien Baru",
        desc: "menambahkan pasien baru",
        user: "Kino Kinora",
        idPasien: "02fsdfedfs",
        waktu: "10 menit yang lalu"
    },
    {
        title: "Pasien Baru",
        desc: "menambahkan pasien baru",
        user: "Kittos Cheetos",
        idPasien: "3sdf97asdf",
        waktu: "1 jam yang lalu"
    },
    {
        title: "Pasien Baru",
        desc: "menambahkan pasien baru",
        user: "Tommy Slebew",
        idPasien: "234dsfgsdf",
        waktu: "3 jam yang lalu"
    },
    {
        title: "Pasien Baru",
        desc: "menambahkan pasien baru",
        user: "Mikky The Sniffy",
        idPasien: "083sdfaer",
        waktu: "3 jam yang lalu"
    },
    
]

export const recentPasien = [
    {
        user: "Zero Leo",
        idPasien: "379gsdfh3r",
        gender: "Pria",
        usia: 28,
        kondisi: "Tinggi"
    },
    {
        user: "Dumbo Gosh",
        idPasien: "wf34wefsd",
        gender: "Pria",
        usia: 18,
        kondisi: "Rendah"
    },
    {
        user: "Kino Kinora",
        idPasien: "02fsdfedfs",
        gender: "Wanita",
        usia: 14,
        kondisi: "Tinggi"
    },
    {
        user: "Kittos Cheetos",
        idPasien: "3sdf97asdf",
        gender: "Wanita",
        usia: 14,
        kondisi: "Sedang"
    },
    {
        user: "Tommy Slebew",
        idPasien: "234dsfgsdf",
        gender: "Wanita",
        usia: 30,
        kondisi: "Tinggi"
    },
    {
        user: "Mikky The Sniffy",
        idPasien: "083sdfaer",
        gender: "Wanita",
        usia: 32,
        kondisi: "Sedang"
    },
    
    {
        user: "Kittos Cheetos",
        idPasien: "3sdf97asdf",
        gender: "Wanita",
        usia: 14,
        kondisi: "Sedang"
    },
    {
        user: "Tommy Slebew",
        idPasien: "234dsfgsdf",
        gender: "Wanita",
        usia: 30,
        kondisi: "Tinggi"
    },
    {
        user: "Mikky The Sniffy",
        idPasien: "083sdfaer",
        gender: "Wanita",
        usia: 32,
        kondisi: "Sedang"
    },
    
    {
        user: "Kittos Cheetos",
        idPasien: "3sdf97asdf",
        gender: "Wanita",
        usia: 14,
        kondisi: "Sedang"
    },
    {
        user: "Tommy Slebew",
        idPasien: "234dsfgsdf",
        gender: "Wanita",
        usia: 30,
        kondisi: "Tinggi"
    },
    {
        user: "Mikky The Sniffy",
        idPasien: "083sdfaer",
        gender: "Wanita",
        usia: 32,
        kondisi: "Sedang"
    },
    
]

export const dummyData = [{"id":"3XM8QD6HW52","nama":"Britney Rix","gender":"Wanita","tujuan":"Pengecekkan","status":"Proses","resiko":"Rendah","nik":"5054073221","tanggal_registrasi":"21/08/2024"},
    {"id":"1V95Q46GR03","nama":"Korry Payne","gender":"Wanita","tujuan":"Berobat","status":"Proses","resiko":"Rendah","nik":"1843515474","tanggal_registrasi":"27/08/2024"},
    {"id":"1C95AT3CU69","nama":"Windy Judron","gender":"Wanita","tujuan":"Berobat","status":"Menunggu","resiko":"Tinggi","nik":"7687884248","tanggal_registrasi":"27/02/2024"},
    {"id":"9G65GA2CT52","nama":"Maddy Minton","gender":"Wanita","tujuan":"Pengecekkan","status":"Proses","resiko":"Sedang","nik":"8253365225","tanggal_registrasi":"24/01/2024"},
    {"id":"6NT6U36DH12","nama":"Elmore Vedenichev","gender":"Pria","tujuan":"Kontrol","status":"Proses","resiko":"Sedang","nik":"2278531840","tanggal_registrasi":"09/09/2024"},
    {"id":"3GR1KP0KA96","nama":"Erwin Cozzi","gender":"Pria","tujuan":"Kontrol","status":"Proses","resiko":"Rendah","nik":"5049509912","tanggal_registrasi":"07/11/2024"},
    {"id":"3QQ4YK4RC71","nama":"Randy Shawcroft","gender":"Wanita","tujuan":"Pengecekkan","status":"Ditangani","resiko":"Rendah","nik":"2143825994","tanggal_registrasi":"30/04/2024"},
    {"id":"8PY9TC5TM83","nama":"Tanner Zincke","gender":"Pria","tujuan":"Konsultasi","status":"Proses","resiko":"Sedang","nik":"1906634211","tanggal_registrasi":"10/11/2024"},
    {"id":"8AN7PU0QR10","nama":"Bartlett Wagge","gender":"Pria","tujuan":"Kontrol","status":"Ditangani","resiko":"Tinggi","nik":"8868489678","tanggal_registrasi":"22/02/2024"},
    {"id":"7XV6P87VW95","nama":"Heloise Gethyn","gender":"Wanita","tujuan":"Berobat","status":"Proses","resiko":"Tinggi","nik":"7665236987","tanggal_registrasi":"13/09/2024"}]