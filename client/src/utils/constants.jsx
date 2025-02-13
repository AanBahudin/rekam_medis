import { LayoutDashboard, NotepadTextDashed, CopyPlus, SquareUserRound, ListMinus, Briefcase, BriefcaseMedical  } from 'lucide-react'

export const links = [
    {
        name: 'Statistik',
        icon: <LayoutDashboard className='stroke-slate-700 w-5 h-5 group-hover:stroke-slate-700 duration-200 ease-in-out' /> ,
        path: '.'
    },
    {
        name: 'Rekam Medis',
        icon: <NotepadTextDashed className='stroke-slate-700 w-5 h-5 group-hover:stroke-slate-700 duration-200 ease-in-out' /> ,
        path: 'all-data'
    },
    {
        name: 'Pendaftaran',
        icon: <CopyPlus className='stroke-slate-700 w-5 h-5 group-hover:stroke-slate-700 duration-200 ease-in-out' /> ,
        path: 'add-data'
    },
    {
        name: 'Dokter',
        icon: <BriefcaseMedical className='stroke-slate-700 w-5 h-5 group-hover:stroke-slate-700 duration-200 ease-in-out' /> ,
        path: 'dokter'
    },
    {
        name: 'Profil',
        icon: <SquareUserRound className='stroke-slate-700 w-5 h-5 group-hover:stroke-slate-700 duration-200 ease-in-out' />,
        path: 'profile'
    },
]

export const dokterLink = [
    {
        name: 'Dashboard',
        icon: <LayoutDashboard className='stroke-slate-700 w-5 h-5 group-hover:stroke-slate-700 duration-200 ease-in-out' /> ,
        path: '.'
    },
    {
        name: 'Antrian',
        icon: <ListMinus className='stroke-slate-700 w-5 h-5 group-hover:stroke-slate-700 duration-200 ease-in-out' /> ,
        path: 'antrian'
    },
    {
        name: 'Profil',
        icon: <SquareUserRound className='stroke-slate-700 w-5 h-5 group-hover:stroke-slate-700 duration-200 ease-in-out' />,
        path: 'profil'
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