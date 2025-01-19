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

export const addDataLinks = [
    {
        title: 'Identitas Pribadi',
        path: 'first'
    },
    {
        title: 'Informasi Kontak',
        path: 'second'
    },
    {
        title: 'Keadaan Umum',
        path: 'third'
    },
    {
        title: 'Psikologi dan Psikososial',
        path: 'fourth'
    },
    {
        title: 'Riwayat kesehatan',
        path: 'fifth'
    },
    {
        title: 'Resiko jatuh dan gizi',
        path: 'sixth'
    },
    {
        title: 'Informasi tambahan',
        path: 'seventh'
    },
    {
        title: 'Administratif',
        path: 'eighth'
    },
    
]