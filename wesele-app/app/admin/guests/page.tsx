'use client';

import PageContainer from "@/components/ui/PageContainer";
import TitleWelcomeLayout from "@/components/ui/TitleWelcomeLayout";
import WelcomeContainer from "@/components/WelcomeContainer";
import getGuestAccesses from "@/utils/getGuestAccesses";
import { useQuery } from "@tanstack/react-query";
import GuestCard from "@/components/admin/GuestCard";
import { useState } from 'react';
import { filterGuests, sortGuests } from "@/utils/filterGuests";
import SearchInput from "@/components/ui/SearchInput";
import SortButton from "@/components/ui/SortButton";

export default function Page() {
    const { data, isLoading } = useQuery({
        queryKey: ['guestAccesses'],
        queryFn: getGuestAccesses
    });

    const [searchTerm, setSearchTerm] = useState('');
    const [sortOptions, setSortOptions] = useState<string[]>([]);

    // Toggle sort options
    const handleSortToggle = (option: string) => {
        setSortOptions(prev =>
            prev.includes(option)
                ? prev.filter(o => o !== option)
                : [...prev, option]
        );
    };

    const filteredData = filterGuests(data, searchTerm);
    const sortedData = sortGuests(filteredData, sortOptions);

    return (
        <>
            <WelcomeContainer imageOptionSrc="1">
                <TitleWelcomeLayout title="Przegląd gości" description="" />
            </WelcomeContainer>
            <PageContainer className="mt-[-35px]">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-4 items-center font-sfPro">
                        {/* Search */}
                        <SearchInput value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                        {/* Filter Buttons */}
                        <div className="flex flex-wrap gap-2">
                            <SortButton
                                isActive={sortOptions.includes('needsAccommodation')}
                                onClick={() => handleSortToggle('needsAccommodation')}
                                label="Nocleg"
                            />
                            <SortButton
                                isActive={sortOptions.includes('accommodationResponse')}
                                onClick={() => handleSortToggle('accommodationResponse')}
                                label="Potwierdzony nocleg"
                            />
                        </div>
                    </div>
                    {/* Guest Cards */}
                    {isLoading ?
                        <GuestCard /> :
                        sortedData?.map((guestAccess) => (
                            <GuestCard key={guestAccess._id} guestAccess={guestAccess} />
                        ))}
                </div>
            </PageContainer>
        </>
    );
}