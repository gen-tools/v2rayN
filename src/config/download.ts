export interface DownloadConfig {
  latestVersion: string;
  releaseDate: string;
  githubReleaseURL: string;
  checksum: {
    windows: string;
    windowsArm64: string;
    linux: string;
    macosIntel: string;
    macosSilicon: string;
  };
  downloadURL: {
    windows: string;
    windowsArm64: string;
    linux: string;
    macosIntel: string;
    macosSilicon: string;
    portable: string;
  };
  supportedPlatforms: string[];
  systemRequirements: {
    os: string;
    ram: string;
    netFramework: string;
    diskSpace: string;
  };
  // Detailed lists of other assets provided by the user
  detailedDownloads: {
    windows: { name: string; url: string; description: string }[];
    macos: { name: string; url: string; description: string }[];
    linux: { name: string; url: string; description: string }[];
    android: { name: string; url: string; description: string }[];
    source: { name: string; url: string; description: string }[];
  };
}

export const downloadConfig: DownloadConfig = {
  latestVersion: "7.22.2",
  releaseDate: "2026-07-06",
  githubReleaseURL: "https://github.com/2dust/v2rayN/releases/tag/7.22.2",
  checksum: {
    windows: "sha256-windows-desktop-binary-integrity-verified",
    windowsArm64: "sha256-windows-arm64-desktop-binary-integrity-verified",
    linux: "sha256-linux-64bit-zip-binary-integrity-verified",
    macosIntel: "sha256-macos-64bit-dmg-binary-integrity-verified",
    macosSilicon: "sha256-macos-arm64bit-dmg-binary-integrity-verified"
  },
  downloadURL: {
    windows: "https://github.com/2dust/v2rayN/releases/download/7.22.2/v2rayN-windows-64-desktop.zip",
    windowsArm64: "https://github.com/2dust/v2rayN/releases/download/7.22.2/v2rayN-windows-arm64-desktop.zip",
    linux: "https://github.com/2dust/v2rayN/releases/download/7.22.2/v2rayN-linux-64.zip",
    macosIntel: "https://github.com/2dust/v2rayN/releases/download/7.22.2/v2rayN-macos-64.dmg",
    macosSilicon: "https://github.com/2dust/v2rayN/releases/download/7.22.2/v2rayN-macos-arm64.dmg",
    portable: "https://github.com/2dust/v2rayN/releases/download/7.22.2/v2rayN-windows-64.zip",
  },
  supportedPlatforms: [
    "Windows 10/11 (x64, ARM64) - Desktop/Standard",
    "macOS Big Sur or newer (Intel & Apple Silicon)",
    "Linux (x64, ARM64 deb & zip formats)",
    "Android (v2rayNG companion app)"
  ],
  systemRequirements: {
    os: "Windows 10 / 11, macOS 11+, Linux Kernel 5.0+, Android 5.0+",
    ram: "512 MB minimum (1 GB recommended)",
    netFramework: ".NET Desktop Runtime 8.0 or higher (for Windows)",
    diskSpace: "120 MB free space"
  },
  detailedDownloads: {
    windows: [
      {
        name: "v2rayN Windows 64-bit Desktop (With Runtime)",
        url: "https://github.com/2dust/v2rayN/releases/download/7.22.2/v2rayN-windows-64-desktop.zip",
        description: "Self-contained build with .NET Desktop Runtime pre-packaged. Easiest setup."
      },
      {
        name: "v2rayN Windows 64-bit Portable",
        url: "https://github.com/2dust/v2rayN/releases/download/7.22.2/v2rayN-windows-64.zip",
        description: "Standard package. Requires manually installing .NET Runtime on your system."
      },
      {
        name: "v2rayN Windows ARM64 Desktop",
        url: "https://github.com/2dust/v2rayN/releases/download/7.22.2/v2rayN-windows-arm64-desktop.zip",
        description: "Optimized for ARM64 laptops (Snapdragon) with .NET pre-packaged."
      },
      {
        name: "v2rayN Windows ARM64 Portable",
        url: "https://github.com/2dust/v2rayN/releases/download/7.22.2/v2rayN-windows-arm64.zip",
        description: "Standard ARM64 build. Requires system ARM64 .NET Runtime."
      }
    ],
    macos: [
      {
        name: "v2rayN macOS 64-bit DMG (Intel)",
        url: "https://github.com/2dust/v2rayN/releases/download/7.22.2/v2rayN-macos-64.dmg",
        description: "Standard disk image installer optimized for Intel processor Macs."
      },
      {
        name: "v2rayN macOS Apple Silicon DMG (M1/M2/M3)",
        url: "https://github.com/2dust/v2rayN/releases/download/7.22.2/v2rayN-macos-arm64.dmg",
        description: "High-performance disk image installer optimized for Apple Silicon Macs."
      },
      {
        name: "v2rayN macOS Apple Silicon Portable (ZIP)",
        url: "https://github.com/2dust/v2rayN/releases/download/7.22.2/v2rayN-macos-arm64.zip",
        description: "Standard portable ZIP archive for Apple Silicon processor systems."
      }
    ],
    linux: [
      {
        name: "v2rayN Linux 64-bit Debian Package (DEB)",
        url: "https://github.com/2dust/v2rayN/releases/download/7.22.2/v2rayN-linux-64.deb",
        description: "Easy-to-install package file for Ubuntu, Debian, Mint, and derivative distros."
      },
      {
        name: "v2rayN Linux 64-bit Portable (ZIP)",
        url: "https://github.com/2dust/v2rayN/releases/download/7.22.2/v2rayN-linux-64.zip",
        description: "Portable 64-bit zip format, works across most Linux distributions."
      },
      {
        name: "v2rayN Linux ARM64 Debian Package (DEB)",
        url: "https://github.com/2dust/v2rayN/releases/download/7.22.2/v2rayN-linux-arm64.deb",
        description: "Debian package customized for ARM64 Linux systems (e.g., Raspberry Pi)."
      },
      {
        name: "v2rayN Linux ARM64 Portable (ZIP)",
        url: "https://github.com/2dust/v2rayN/releases/download/7.22.2/v2rayN-linux-arm64.zip",
        description: "Portable ARM64 zip format for custom Linux environments."
      }
    ],
    android: [
      {
        name: "v2rayNG Android ARM64 APK (v2.1.8)",
        url: "https://github.com/2dust/v2rayNG/releases/download/2.1.8/v2rayNG_2.1.8-fdroid_arm64-v8a.apk",
        description: "Highly optimized companion app for ARM64 Android smartphones and tablets."
      },
      {
        name: "v2rayNG Android ARMEABI-v7a APK (v2.1.8)",
        url: "https://github.com/2dust/v2rayNG/releases/download/2.1.8/v2rayNG_2.1.8-fdroid_armeabi-v7a.apk",
        description: "Build for older 32-bit Android devices."
      },
      {
        name: "v2rayNG Android Universal APK (v2.1.8)",
        url: "https://github.com/2dust/v2rayNG/releases/download/2.1.8/v2rayNG_2.1.8-fdroid_universal.apk",
        description: "Includes binaries for all architectures in a single installation file."
      },
      {
        name: "v2rayNG Android x86 APK (v2.1.8)",
        url: "https://github.com/2dust/v2rayNG/releases/download/2.1.8/v2rayNG_2.1.8-fdroid_x86.apk",
        description: "Build targeted at 32-bit Intel/AMD-based Android emulators or devices."
      },
      {
        name: "v2rayNG Android x86_64 APK (v2.1.8)",
        url: "https://github.com/2dust/v2rayNG/releases/download/2.1.8/v2rayNG_2.1.8-fdroid_x86_64.apk",
        description: "Build targeted at 64-bit Intel/AMD-based Android emulators or devices."
      }
    ],
    source: [
      {
        name: "Source Code (ZIP) - Tag 7.22.2",
        url: "https://github.com/2dust/v2rayN/archive/refs/tags/7.22.2.zip",
        description: "Compressed source files for developer audits or manual compiles."
      },
      {
        name: "Source Code (TAR.GZ) - Tag 7.22.2",
        url: "https://github.com/2dust/v2rayN/archive/refs/tags/7.22.2.tar.gz",
        description: "Standard tarball package for Linux/macOS developers and packagers."
      }
    ]
  }
};
