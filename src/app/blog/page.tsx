"use client"

import React, { useEffect, useState } from "react";
import "./styles.css";
import { HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";

export default function Blog() {
    const onNewTab = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const isNewTab = evt.target.checked;
        console.log("Is new tab?", isNewTab);
    }

    const onShowTop = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const isShowTop = evt.target.checked;
        console.log("Is show top?", isShowTop);
    }

    useEffect(() => {
    });

    return <>
        {/* Categories */}
        <div>
            <table className="w-full table-fixed" cellSpacing={0} cellPadding={0}>
                <tbody>
                    <tr className="border-b border-[#hC2D5E3] bg-[#F2F2F2] border-b border-[#C2D5E3] text-sm">
                        <td colSpan={2} className="text-left pl-2 py-2 space-x-3">
                            <input type="checkbox" onChange={onNewTab} /><label className="text-xs">New Tab</label>
                            <input type="checkbox" onChange={onShowTop} /><label className="text-xs">Show Top</label>
                            <a className="hover:cursor-pointer text-[#369]">All</a>
                            <a className="hover:cursor-pointer text-[#369]">Newest</a>
                            <a className="hover:cursor-pointer text-[#369]">Popular</a>
                        </td>
                        <td className="w-28">Author</td>
                        <td className="w-24">Info</td>
                        <td className="w-28">Last Updated</td>
                    </tr>
                </tbody>
            </table>
            <table className="table-fixed w-full text-sm text-[#334]" cellSpacing={0} cellPadding={0}>
                <tbody className={"tableBody"}>
                    <tr className="table-row align-middle hover:bg-[#F2F2F2]">
                        <td className="w-6">
                            <HiOutlineChatBubbleBottomCenterText />
                        </td>
                        <td>
                            <a className="hover:cursor-pointer text-[#369] pr-2">
                                [C&C++ 原创]
                            </a>
                            <span className="text-[#333] hover:cursor-pointer hover:border-b border-[#333]">
                                另一种基于AVX2/SSE2的高效模式匹配算法在内存搜索中的应用-By.Haogl-2024090
                            </span>
                        </td>
                        <td className="w-28">
                            <cite>
                                <a
                                    className="hover:cursor-pointer text-[#369]"
                                    title="AxiaoWyaoAAAAAAAAAAAAAAAAAAAA"
                                >
                                    haogl
                                </a>
                            </cite>
                        </td>
                        <td className="w-24">1.2k / 5k</td>
                        <td className="w-28">2024/09/10</td>
                    </tr>
                    <tr className="table-row align-middle hover:bg-[#F2F2F2]">
                        <td className="w-6"><span className="pl-2">I</span></td>
                        <td>
                            <a className="hover:cursor-pointer text-[#369] pr-2">
                                [其他原创]
                            </a>
                            <span className="text-[#333] hover:cursor-pointer hover:border-b border-[#333]">
                                【开源】IP配置工具_2.6__一键切换IP、改Mac、计算机名
                            </span>
                        </td>
                        <td className="w-28">
                            <cite>
                                <a
                                    className="hover:cursor-pointer text-[#369]"
                                    title="快乐的小萌新"
                                >
                                    快乐的小萌新
                                </a>
                            </cite>
                        </td>
                        <td className="w-24">78 / 120</td>
                        <td className="w-28">2024/09/10</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>;
}
