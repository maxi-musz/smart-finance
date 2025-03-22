'use client';

import CountUp from 'react-countup';
import { WalletBalanceInfoProps } from '@/types/base';
import Image from 'next/image';
import { useState } from 'react';
import { Key, RemoveRedEyeOutlined } from '@mui/icons-material';


const WalletBallanceCard: React.FC<WalletBalanceInfoProps> = ({item}) => {
  const [isBalanceOpen, setIsBalanceOpen] = useState(false);

  const handleBalanceToggle = () => setIsBalanceOpen(prev => !prev);
    
  return (
    <div className='w-80 h-40 py-6 pl-5 pr-3 bg-blue-200 rounded-3xl flex flex-col justify-between'>

      <div className="w-full flex items-center justify-end gap-1">
        <p className='font-semibold text-xl'>{item.currencyInitials}</p>
        <div className="relative size-8 rounded-full">
          <Image
            src={`/images/${item.currencyFlag}`}
            alt="Currency's country logo"
            fill
            priority
            className="object-cover rounded-full"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-neutral-700 text-base font-semibold">Wallet Balance</p>
        <div className="w-full flex items-center justify-between">
          <p className='text-textGrayDarker text-xl md:text-2xl font-bold'>
            {item.currency}
            {!isBalanceOpen ? <CountUp start={0} end={parseInt(item.balance)} duration={2} delay={0} decimal='true' /> : "******"}
          </p>
          <button onClick={handleBalanceToggle}>
            {isBalanceOpen ?
            <RemoveRedEyeOutlined style={{fontSize: '19px', }} /> :
            <Key style={{fontSize: '19px', }} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalletBallanceCard;
