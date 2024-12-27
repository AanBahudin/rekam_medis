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