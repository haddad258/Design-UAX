// for Nav images
import Vector from '@assets/Vector.png';
import VectorActive from '@assets/Vector(1).png';
import nfts from '@assets/nfts.png';
import nftsActive from '@assets/nfts(1).png';
import Swap from '@assets/Swap.png';
import SwapActive from '@assets/Swap(1).png';
import reward from '@assets/reward.png';
import rewardActive from '@assets/reward(1).png';
import Settings from '@assets/Settings.png';
import SettingsActive from '@assets/Settings(1).png';

// for Collections Images

import image1 from '@assets/collections/1.png';
import image2 from '@assets/collections/2.png';
import image3 from '@assets/collections/3.png';
import image4 from '@assets/collections/4.png';
import image5 from '@assets/collections/5.png';
import image6 from '@assets/collections/6.png';

// nft images
import NFT1 from '@assets/markplace/ntf/1.jpg';
import NFT2 from '@assets/markplace/ntf/2.png';
import NFT3 from '@assets/markplace/ntf/3.jpg';

// trending images
import Trending1 from '@assets/markplace/trending/1.jpg';
import Trending2 from '@assets/markplace/trending/2.png';
import Trending3 from '@assets/markplace/trending/3.jpg';

// for Reward images 
import first from '@assets/bandwidth/1.png';
import second from '@assets/bandwidth/2.png';
import third from '@assets/bandwidth/3.png';
import force from '@assets/bandwidth/4.png';

// for settings images
import infor from '@assets/settings/information.png';
import wallet from '@assets/settings/wallet.png';
import dev from '@assets/settings/dev.png';
import face from '@assets/settings/face.png';

import invite from '@assets/settings/invite.png';
import help from '@assets/settings/help.png';
import about from '@assets/settings/about.png';

// for Referral Images
import Person from '@assets/person.png';

// for Transation history
import Txs from '@assets/txs.png';

// for TicketDetail images
import ticket from '@assets/image.png';

export const datas = {
    nav: {
        images: {
            Vector,
            VectorActive,
            nfts,
            nftsActive,
            Swap,
            SwapActive,
            reward,
            rewardActive,
            Settings,
            SettingsActive,
        },
        datas: [
            {
                image: 'Vector',
                path: 'Dashboard'
            },
            {
                image: 'nfts',
                path: 'NFTs'
            },
            {
                image: 'Swap',
                path: 'Swap'
            },
            {
                image: 'reward',
                path: 'Reward'
            },
            {
                image: 'Settings',
                path: 'Settings'
            },
        ]
    },
    collections: [
        {
            image: image1,
            art: 1,
            uaxn: 100
        },
        {
            image: image2,
            art: 2,
            uaxn: 50
        },
        {
            image: image3,
            art: 3,
            uaxn: 10
        },
        {
            image: image4,
            art: 1,
            uaxn: 100
        },
        {
            image: image5,
            art: 2,
            uaxn: 50
        },
        {
            image: image6,
            art: 3,
            uaxn: 10
        },
    ],
    markplace: {
        nft: [
            {
                id: 1,
                image: NFT1,
                content: 'Music'
            },
            {
                id: 2,
                image: NFT2,
                content: 'Flight'
            },
            {
                id: 3,
                image: NFT3,
                content: 'No content'
            },
        ],
        trending: [
            {
                id: 4,
                image: Trending1,
                art: 'Portrait',
                rate: 200,
                creator: 'John Doe',
                address: 'RLiJiuDPcda.uax',
                txnId: '481921303d4c11efbc7',
                des: 'Abstract Art is one of the items included in Lorem Ipsum was released on Jan 10, 2024.'
            },
            {
                id: 5,
                image: Trending2,
                art: 'Abstract',
                rate: 200,
                creator: 'John Doe',
                address: 'RLiJiuDPcda.uax',
                txnId: '481921303d4c11efbc7',
                des: 'Abstract Art is one of the items included in Lorem Ipsum was released on Jan 10, 2024.'
            },
            {
                id: 6,
                image: Trending3,
                art: 'Portrait',
                rate: 200,
                creator: 'John Doe',
                address: 'RLiJiuDPcda.uax',
                txnId: '481921303d4c11efbc7',
                des: 'Abstract Art is one of the items included in Lorem Ipsum was released on Jan 10, 2024.'
            },
        ],
    },
    reward: [
        {
            label: 'Balance',
            icon: first,
            content: '100.00 UAXN',
            color: 'white'
        },
        {
            label: 'Staked/Validators',
            icon: second,
            content: '0/0',
            color: '#F4970D'
        },
        {
            label: 'Generated Bandwidth',
            icon: third,
            content: '0.00',
            color: '#0DF469'
        },
        {
            label: 'Stake Rewards',
            icon: force,
            content: '0.00 UAXN',
            color: '#DF16FF'
        },
    ],
    settings: [
        {
            title: 'General',
            lists: [
                {
                    icon: infor,
                    content: 'Basic Information',
                    path: 'BasicInfor'
                },
                {
                    icon: wallet,
                    content: 'Wallet Settings',
                    path: 'Wallet'
                },
                {
                    icon: dev,
                    content: 'Developer Settings',
                    path: 'Developer'
                },
                {
                    icon: face,
                    content: 'Face ID',
                    path: 'FaceID'
                },
            ]
        },
        {
            title: 'More info & support',
            lists: [
                {
                    icon: invite,
                    content: 'Invite & Earn',
                    path: 'Invite'
                },
                {
                    icon: help,
                    content: 'Support Ticket',
                    path: 'Support'
                },
                // {
                //     icon: about,
                //     content: 'About Us',
                //     path: 'AboutUs'
                // },
            ]
        },
    ],
    invite: [
        {
            percent: 0,
        },
        {
            percent: 15,
        },
        {
            percent: 25,
        },
        {
            percent: 50,
        },
    ],
    referral: [
        {
            avatar: Person,
            name: 'Mary',
            join: '07 May, 2025',
            balance: '$10'
        },
        {
            avatar: Person,
            name: 'Mary',
            join: '07 May, 2025',
            balance: '$10'
        },
        {
            avatar: Person,
            name: 'Mary',
            join: '07 May, 2025',
            balance: '$10'
        },
        {
            avatar: Person,
            name: 'Mary',
            join: '07 May, 2025',
            balance: '$10'
        },
        {
            avatar: Person,
            name: 'Mary',
            join: '07 May, 2025',
            balance: '$10'
        },
    ],
    getBandWidth: [
        {
            label: 'Balance',
            icon: first,
            content: '100.00 UAXN',
            color: 'white'
        },
        {
            label: 'Staked/Validators',
            icon: second,
            content: '0/0',
            color: '#F4970D'
        },
        {
            label: 'Generated Bandwidth',
            icon: third,
            content: '0.00',
            color: '#0DF469'
        },
        {
            label: 'Stake Rewards',
            icon: force,
            content: '0.00 UAXN',
            color: '#DF16FF'
        },
    ],
    support: [
        {
            id: 1234,
            submit: 'Can’t update the app',
            date: 'Jun 03, 2025',
            time: '11:20 pm',
            status: 'Open'
        },
        {
            id: 1235,
            submit: 'How to edit my pro',
            date: 'May 28, 2025',
            time: '11:20 pm',
            status: 'In progress'
        },
        {
            id: 1236,
            submit: 'Cannot open the app',
            date: 'May 10, 2025',
            time: '11:20 pm',
            status: 'Solved'
        },
    ],
    ticketDetail: [
        {
            color: ['#2C2430', '#19131D'],
            title: 'John Doe',
            content: 'Why can’t I update the app? It keeps reloading the same page. Please help.',
            time: '20:00',
            image: ticket,
            imageColor: '#2C2430',
            icon: false
        },
        {
            color: ['#1C2F2DF7', '#1C2F2DF7'],
            title: 'Deanna',
            content: 'Hi, Deanna here. Have you tried turning your phone off and on again?',
            time: '20:00',
            image: ticket,
            imageColor: '#304141',
            icon: true
        },
    ],
    txs: [
        {
            icon: Txs,
            state: true,
            amount: 100,
            usd: 1.21,
            txid: '980706b09a99bfd953c5cfa6',
            date: '10/06/2025',
            time: '14:12:03'
        },
        {
            icon: Txs,
            state: false,
            amount: 77.42,
            usd: 0.12,
            txid: '980706b09a99bfd953c5cfa6',
            date: '10/06/2025',
            time: '14:12:03'
        },
        {
            icon: Txs,
            state: false,
            amount: 77.42,
            usd: 0.12,
            txid: '980706b09a99bfd953c5cfa6',
            date: '10/06/2025',
            time: '14:12:03'
        },
        {
            icon: Txs,
            state: true,
            amount: 100.00,
            usd: 1.21,
            txid: '980706b09a99bfd953c5cfa6',
            date: '10/06/2025',
            time: '14:12:03'
        },
    ]
}