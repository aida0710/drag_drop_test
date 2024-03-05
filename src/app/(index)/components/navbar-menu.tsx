import {ExportButton} from '@/app/(index)/components/menu-items/file/export-button';
import {ImportButton} from '@/app/(index)/components/menu-items/file/import-button';
import {DataResetButton} from '@/app/(index)/components/menu-items/file/data-reset-button';
import {ThemeButton} from '@/app/(index)/components/menu-items/setting/theme-button';
import {BackgroundVariantButton} from '@/app/(index)/components/menu-items/setting/background-variant-button';
import {MiniMapButton} from '@/app/(index)/components/menu-items/setting/mini-map-button';
import React from 'react';
import {Button, Divider, Dropdown, DropdownMenu, DropdownTrigger, Navbar, NavbarContent, NavbarItem} from '@nextui-org/react';

export const NavbarMenu = () => {
    return (
        <Navbar>
            <NavbarContent
                className='hidden gap-4 sm:flex'
                justify='center'>
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className='bg-transparent p-0 data-[hover=true]:bg-transparent'
                                radius='sm'
                                variant='light'>
                                File
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label='File actions'
                        className='w-[340px]'
                        itemClasses={{base: 'gap-4'}}>
                        <ImportButton />
                        <ExportButton />
                        <Divider />
                        <DataResetButton />
                    </DropdownMenu>
                </Dropdown>
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className='bg-transparent p-0 data-[hover=true]:bg-transparent'
                                radius='sm'
                                variant='light'>
                                Settings
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label='Settings'
                        className='w-[340px]'
                        itemClasses={{base: 'gap-4'}}>
                        <ThemeButton />
                        <BackgroundVariantButton />
                        <MiniMapButton />
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
            <NavbarContent justify='end'>
                <NavbarItem className='hidden lg:flex'>
                    <Button
                        variant='light'
                        radius='sm'>
                        Documentation
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
        /* <Menubar>
            <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                    <ImportButton />
                    <ExportButton />
                    <MenubarSeparator />
                    <DataResetButton />
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Settings</MenubarTrigger>
                <MenubarContent>
                    <ThemeButton />
                    <BackgroundVariantButton />
                    <MiniMapButton />
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Help</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>Documentation</MenubarItem>
                    <MenubarItem>Feedback</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>*/
    );
};
