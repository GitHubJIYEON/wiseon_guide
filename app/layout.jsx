import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import Link from "next/link";
import "./globals.css";

export const metadata = {
    title: {
        default: "WiseOn Guide",
        template: "%s | WiseOn Guide",
    },
    description: "와이즈온 가이드 문서 - 설문 작성부터 데이터 분석까지 모든 기능을 안내합니다.",
    keywords: ["WiseOn", "와이즈온", "설문조사", "데이터 분석", "가이드", "문서"],
    authors: [{ name: "WiseOn" }],
    creator: "WiseOn",
    publisher: "WiseOn",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("https://guide.wiseon.io"), // 실제 도메인으로 변경
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "ko_KR",
        url: "https://guide.wiseon.io", // 실제 도메인으로 변경
        siteName: "WiseOn Guide",
        title: "WiseOn Guide",
        description: "와이즈온 가이드 문서 - 설문 작성부터 데이터 분석까지 모든 기능을 안내합니다.",
        images: [
            {
                url: "/og-image.png", // Open Graph 이미지 추가 권장
                width: 1200,
                height: 630,
                alt: "WiseOn Guide",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "WiseOn Guide",
        description: "와이즈온 가이드 문서 - 설문 작성부터 데이터 분석까지 모든 기능을 안내합니다.",
        images: ["/og-image.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/favicon.svg",
    },
};

const navbar = (
    <Navbar
        logo={<img src="/logo.svg" alt="WiseOn Logo" style={{ width: "100px", height: "auto" }} />}>
        <div
            style={{
                backgroundColor: "#075ad3",
                padding: "6px 16px",
                borderRadius: "8px",
                color: "#fff",
                fontSize: "14px",
            }}>
            <Link href="https://www.wiseon.io/" target="_blank" rel="noopener noreferrer">
                <b>WiseOn 바로가기</b>
            </Link>
        </div>
    </Navbar>
);

const footer = <Footer>© {new Date().getFullYear()} WiseOn Guide.</Footer>;

export default async function RootLayout({ children }) {
    return (
        <html lang="ko" dir="ltr" suppressHydrationWarning>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            name: "WiseOn Guide",
                            description:
                                "와이즈온 가이드 문서 - 설문 작성부터 데이터 분석까지 모든 기능을 안내합니다.",
                            url: "https://guide.wiseon.io",
                            publisher: {
                                "@type": "Organization",
                                name: "WiseOn",
                                url: "https://www.wiseon.io",
                            },
                        }),
                    }}
                />
            </Head>
            <body>
                <Layout
                    navbar={navbar}
                    banner={
                        <Banner storageKey="wiseon-guide-release">
                            <a href="https://wiseon.io" target="_blank">
                                🎉 WiseOn 1.0 is released. Read more →
                            </a>
                        </Banner>
                    }
                    pageMap={await getPageMap()}
                    footer={footer}>
                    {children}
                </Layout>
            </body>
        </html>
    );
}
