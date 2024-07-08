import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";

declare module 'react' {
    interface CSSProperties {
        '--i'?: number;
    }
}
export const Home = () => {
    return (
        <div className="w-full h-fit pt-25 flex flex-col justify-center items-center">
            <h2 className="text-title-md2 p-10 font-semibold text-black dark:text-white">
                Chainager Home
            </h2>
            <div className="pt-10 cube-loader">
                <div className="cube-top"></div>
                <div className="cube-wrapper">
                    <span style={{ '--i': 0 } as React.CSSProperties} className="cube-span"></span>
                    <span style={{ '--i': 1 } as React.CSSProperties} className="cube-span"></span>
                    <span style={{ '--i': 2 } as React.CSSProperties} className="cube-span"></span>
                    <span style={{ '--i': 3 } as React.CSSProperties} className="cube-span"></span>
                </div>
            </div>
        </div>
    )
}