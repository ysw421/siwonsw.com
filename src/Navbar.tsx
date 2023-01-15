import { Fragment, useState } from "react";
import {
    Disclosure,
    Listbox,
    Menu,
    Popover,
    Transition,
} from "@headlessui/react";
import {
    Bars3Icon,
    BellIcon,
    CheckIcon,
    ChevronUpDownIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
}

const navigation = [
    { name: "Dashboard", href: "#", current: true },
    { name: "Team", href: "#", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "Calendar", href: "#", current: false },
];

const chains = [{ name: "ATOM" }, { name: "OSMO" }, { name: "JUNO" }];

export default function Navbar() {
    const [isConnected, setIsConnected] = useState(false);
    const [selectedChain, setSelectedChain] = useState(chains[0]);
    const [tokenAmount, setTokenAmount] = useState(0);
    const [account, setAccount] = useState({ bech32Address: "" });

    const disconnect = () => {
        setIsConnected(false);
    };

    const connect = () => {
        setIsConnected(true);
        setTokenAmount(10.45);
        setAccount({ bech32Address: "juno123456789" });
    };

    const copyAddress = async () => {
        let address = account!.bech32Address;

        try {
            await navigator.clipboard.writeText(address);
        } catch (err) {
            // TODO
            console.error("Failed to copy: ", err);
        }
    };

    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XMarkIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Bars3Icon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="block h-8 w-auto lg:hidden"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                        alt="Your Company"
                                    />
                                    <img
                                        className="hidden h-8 w-auto lg:block"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? "bg-gray-900 text-white"
                                                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                    "px-3 py-2 rounded-md text-sm font-medium"
                                                )}
                                                aria-current={
                                                    item.current
                                                        ? "page"
                                                        : undefined
                                                }
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {isConnected ? (
                                    <div>
                                        {" "}
                                        {/* Profile dropdown */}
                                        <Popover
                                            as="div"
                                            className="relative ml-3"
                                        >
                                            <div>
                                                <Popover.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                    <span className="sr-only">
                                                        Open user menu
                                                    </span>
                                                    <img
                                                        className="h-8 w-8 rounded-full"
                                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                        alt=""
                                                    />
                                                </Popover.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Popover.Panel className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <div>
                                                        {" "}
                                                        <Listbox
                                                            value={
                                                                selectedChain
                                                            }
                                                            onChange={
                                                                setSelectedChain
                                                            }
                                                        >
                                                            <div className="relative mt-1">
                                                                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                                                    <span className="block truncate">
                                                                        {
                                                                            selectedChain.name
                                                                        }
                                                                    </span>
                                                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                        <ChevronUpDownIcon
                                                                            className="h-5 w-5 text-gray-400"
                                                                            aria-hidden="true"
                                                                        />
                                                                    </span>
                                                                </Listbox.Button>
                                                                <Transition
                                                                    as={
                                                                        Fragment
                                                                    }
                                                                    leave="transition ease-in duration-100"
                                                                    leaveFrom="opacity-100"
                                                                    leaveTo="opacity-0"
                                                                >
                                                                    <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                        {chains.map(
                                                                            (
                                                                                chain,
                                                                                chainIdx
                                                                            ) => (
                                                                                <Listbox.Option
                                                                                    key={
                                                                                        chainIdx
                                                                                    }
                                                                                    className={({
                                                                                        active,
                                                                                    }) =>
                                                                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                                                            active
                                                                                                ? "bg-amber-100 text-amber-900"
                                                                                                : "text-gray-900"
                                                                                        }`
                                                                                    }
                                                                                    value={
                                                                                        chain
                                                                                    }
                                                                                >
                                                                                    {({
                                                                                        selected,
                                                                                    }) => (
                                                                                        <>
                                                                                            <span
                                                                                                className={`block truncate ${
                                                                                                    selected
                                                                                                        ? "font-medium"
                                                                                                        : "font-normal"
                                                                                                }`}
                                                                                            >
                                                                                                {
                                                                                                    chain.name
                                                                                                }
                                                                                            </span>
                                                                                            {selected ? (
                                                                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                                                    <CheckIcon
                                                                                                        className="h-5 w-5"
                                                                                                        aria-hidden="true"
                                                                                                    />
                                                                                                </span>
                                                                                            ) : null}
                                                                                        </>
                                                                                    )}
                                                                                </Listbox.Option>
                                                                            )
                                                                        )}
                                                                    </Listbox.Options>
                                                                </Transition>
                                                            </div>
                                                        </Listbox>
                                                    </div>
                                                    <div>
                                                        <div className="border-b border-dashed border-gray-200 px-6 py-5 dark:border-gray-700">
                                                            <div className="j flex flex-row gap-3">
                                                                <span className="rounded-lg bg-gray-100 px-2 py-1 text-sm tracking-tighter  dark:bg-gray-800">
                                                                    {account.bech32Address.slice(
                                                                        0,
                                                                        10
                                                                    )}
                                                                    {"..."}
                                                                </span>

                                                                <button
                                                                    className="h-auto  cursor-pointer w-20"
                                                                    onClick={() =>
                                                                        copyAddress()
                                                                    }
                                                                >
                                                                    copy
                                                                </button>
                                                            </div>

                                                            <div className="mt-3 font-medium uppercase tracking-wider text-gray-900 dark:text-white">
                                                                {tokenAmount}{" "}
                                                                JUNO
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button
                                                            onClick={disconnect}
                                                        >
                                                            disconnect
                                                        </button>
                                                    </div>
                                                </Popover.Panel>
                                            </Transition>
                                        </Popover>
                                    </div>
                                ) : (
                                    <button onClick={connect}>Connect</button>
                                )}
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current
                                            ? "bg-gray-900 text-white"
                                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                        "block px-3 py-2 rounded-md text-base font-medium"
                                    )}
                                    aria-current={
                                        item.current ? "page" : undefined
                                    }
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
