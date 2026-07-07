import { Article } from "../types";

export const articlesData: Article[] = [
  // --- INSTALLATION ARTICLES ---
  {
    id: "installation/windows",
    category: "installation",
    title: "How to Install v2rayN on Windows 10 & 11",
    description: "A complete step-by-step guide to installing the latest version of v2rayN on Microsoft Windows with cores included.",
    lastUpdated: "July 2026",
    readingTime: "4 min",
    relatedArticleIds: ["installation/first-setup", "installation/import-sub", "configuration/tun"],
    sections: [
      {
        title: "System Prerequisites",
        id: "prerequisites",
        content: "Before installing v2rayN, ensure your Windows PC meets the minimum requirements. You must have .NET Desktop Runtime installed, as v2rayN is a WPF application designed for the .NET Framework.",
        alertType: "warning",
        alertContent: "Important: Ensure you download the '.NET Desktop Runtime' and not the standard SDK or ASP.NET runtimes."
      },
      {
        title: "Step 1: Download the Package",
        id: "step-1",
        content: "Download the latest release package from the download page or the official GitHub repository. We recommend downloading the version with 'With-Core' which includes pre-compiled Xray/V2ray cores.",
        code: "v2rayN-With-Core.zip (Approx 80MB)",
        codeLanguage: "text"
      },
      {
        title: "Step 2: Extraction",
        id: "step-2",
        content: "Extract the downloaded ZIP file to a permanent directory (e.g., C:\\Program Files\\v2rayN or D:\\Tools\\v2rayN). Avoid running it directly from the zip previewer."
      },
      {
        title: "Step 3: Run as Administrator",
        id: "step-3",
        content: "Locate `v2rayN.exe` in the extracted folder, right-click, and select 'Run as administrator' for first-time setup. This is required for proper TUN mode routing and system proxy overrides.",
        alertType: "info",
        alertContent: "If Windows SmartScreen prompts 'Windows protected your PC', click 'More info' and then 'Run anyway'."
      }
    ]
  },
  {
    id: "installation/linux",
    category: "installation",
    title: "Installing v2rayN on Linux Desktop",
    description: "Learn how to configure and launch v2rayN on Ubuntu, Fedora, or Arch Linux systems using Dotnet runtimes or Mono engines.",
    lastUpdated: "June 2026",
    readingTime: "5 min",
    relatedArticleIds: ["installation/windows", "configuration/tun", "troubleshooting/core-missing"],
    sections: [
      {
        title: "Linux Environment Notes",
        id: "notes",
        content: "v2rayN is primarily built for Windows, but can be run on Linux distributions with the appropriate .NET Runtime or via wine/mono containers. Alternatively, many users use native CLI v2ray/Xray on Linux, but the GUI can be bound using the guide below."
      },
      {
        title: "Installing Dotnet Core",
        id: "dotnet-install",
        content: "Install the ASP.NET Core and .NET Runtime on your Linux machine using your package manager.",
        code: "sudo apt install -y dotnet-sdk-8.0 dotnet-runtime-8.0",
        codeLanguage: "bash"
      },
      {
        title: "Running the Executable",
        id: "run-exec",
        content: "Grant executable permissions and launch the GUI.",
        code: "chmod +x v2rayN.exe\ndotnet v2rayN.dll",
        codeLanguage: "bash"
      }
    ]
  },
  {
    id: "installation/macos",
    category: "installation",
    title: "Setting up v2rayN on macOS (Intel & Apple Silicon)",
    description: "A friendly guide to deploying v2rayN on macOS Big Sur, Monterey, Ventura, or Sonoma.",
    lastUpdated: "June 2026",
    readingTime: "5 min",
    relatedArticleIds: ["installation/first-setup", "configuration/system-proxy", "troubleshooting/certificate-error"],
    sections: [
      {
        title: "Prerequisites for macOS",
        id: "macos-prereqs",
        content: "MacOS users can utilize the cross-platform builds of v2rayN or use wine/dotnet. Since Apple Silicon (M1/M2/M3) has strict code-signing policies, please follow the trust clearance step carefully."
      },
      {
        title: "Clearing Gatekeeper Restrictions",
        id: "gatekeeper",
        content: "If macOS prompts that the file is damaged or cannot be verified, open your terminal and bypass the Gatekeeper quarantined flag:",
        code: "sudo xattr -rd com.apple.quarantine /Applications/v2rayN.app",
        codeLanguage: "bash",
        alertType: "info",
        alertContent: "This command deletes the quarantine flag, allowing the app to launch on macOS Ventura & Sonoma."
      }
    ]
  },
  {
    id: "installation/first-setup",
    category: "installation",
    title: "First-Time Setup and Initialization Guide",
    description: "Essential initial configurations immediately after opening v2rayN for the first time.",
    lastUpdated: "May 2026",
    readingTime: "3 min",
    relatedArticleIds: ["installation/windows", "installation/import-sub", "configuration/system-proxy"],
    sections: [
      {
        title: "Initial Launch and Language Selection",
        id: "language",
        content: "Upon opening v2rayN, the interface might default to Chinese. To switch it to English, locate the top menu item with the blue help icon, or find the Language dropdown, select 'English', close v2rayN from the system tray (right-click -> Exit), and restart the application.",
        alertType: "success",
        alertContent: "Restarting is necessary! The UI will fully refresh in English once re-opened."
      },
      {
        title: "Verifying Cores",
        id: "verify-cores",
        content: "Go to Settings -> Option Settings and ensure the paths to `xray.exe` or `v2ray.exe` are configured. If you downloaded the 'With-Core' package, this will be pre-filled automatically."
      }
    ]
  },
  {
    id: "installation/import-sub",
    category: "installation",
    title: "How to Import Subscriptions into v2rayN",
    description: "Import your VMess, VLESS, or Trojan subscription links with automated schedule updates.",
    lastUpdated: "July 2026",
    readingTime: "4 min",
    relatedArticleIds: ["installation/first-setup", "configuration/subscription", "troubleshooting/subscription-failed"],
    sections: [
      {
        title: "Obtaining Subscription URL",
        id: "get-url",
        content: "Your proxy service provider will give you a subscription URL. This URL holds encrypted text representing multiple server nodes."
      },
      {
        title: "Adding to v2rayN Group Subscription",
        id: "add-subscription",
        content: "1. Click on 'Subscription Group' -> 'Promotion Settings' (or Subscription Settings).\n2. Click 'Add'.\n3. Input a remarks label (e.g., 'My Proxy Group') and paste the raw subscription URL.\n4. Click 'Confirm' to save."
      },
      {
        title: "Updating Server Nodes",
        id: "update-nodes",
        content: "After saving, click 'Subscription Group' in the top menu and select 'Update subscription'. You will see all your VMess/VLESS/Trojan nodes populated in the main window list.",
        alertType: "success",
        alertContent: "Pro Tip: You can set auto-update intervals in settings to refresh node lists every 24 hours."
      }
    ]
  },
  {
    id: "installation/manual-config",
    category: "installation",
    title: "Manual Node Configuration Guide",
    description: "A tutorial on manually creating a server node connection using IP, Port, UUID, and Transport details.",
    lastUpdated: "May 2026",
    readingTime: "6 min",
    relatedArticleIds: ["configuration/vless", "configuration/vmess", "configuration/trojan"],
    sections: [
      {
        title: "Adding a VMess / VLESS Node Manually",
        id: "manual-node",
        content: "If you don't have a subscription link, you can add nodes individually. Select 'Servers' in the top left, and choose 'Add [VMess] server' or 'Add [VLESS] server'."
      },
      {
        title: "Key Parameters to Fill",
        id: "key-params",
        content: "Ensure the following parameters match your server node exactly:\n- Address (IP or Domain name)\n- Port (usually 443 for TLS or custom high port)\n- User ID (UUID)\n- Flow (for VLESS xtls-rprx-vision)\n- Network protocol (tcp, ws, grpc)\n- TLS configuration (reality, tls, or none)"
      }
    ]
  },
  {
    id: "installation/update-guide",
    category: "installation",
    title: "How to Safely Update v2rayN and its Cores",
    description: "Keep your installation secure by updating both the v2rayN GUI application and individual core engines.",
    lastUpdated: "June 2026",
    readingTime: "3 min",
    relatedArticleIds: ["installation/windows", "troubleshooting/core-missing"],
    sections: [
      {
        title: "Updating v2rayN GUI Client",
        id: "update-gui",
        content: "To update the GUI, you can download the latest release files. Simply copy your old configurations (the `guiConfigs` folder) into the new directory to preserve your settings."
      },
      {
        title: "Updating Routing Cores (Xray/V2ray)",
        id: "update-cores",
        content: "You can update the underlying engines inside v2rayN. Go to the top menu, select 'Check for updates', and click 'Update Xray Core' or 'Update V2ray Core'. v2rayN will download and unzip the cores into the binary folder automatically."
      }
    ]
  },

  // --- CONFIGURATION ARTICLES ---
  {
    id: "configuration/vmess",
    category: "configuration",
    title: "VMess Protocol Configuration and Security Settings",
    description: "Detailed breakdown of VMess server settings, encryption levels, and WS/gRPC transports in v2rayN.",
    lastUpdated: "June 2026",
    readingTime: "5 min",
    relatedArticleIds: ["configuration/vless", "installation/manual-config"],
    sections: [
      {
        title: "What is VMess?",
        id: "what-is-vmess",
        content: "VMess is the original encryption protocol introduced by V2Ray. It relies on a client-server structure and time-synchronized cryptography token validation.",
        alertType: "info",
        alertContent: "Ensure your computer clock is synchronized with internet time (within 90 seconds deviation) to avoid VMess handshaking failures."
      },
      {
        title: "Transport Layer Customization",
        id: "transport",
        content: "VMess is often paired with WebSocket + TLS or gRPC for proxying through content delivery networks (CDNs). Adjust the path and Host header in the Transport settings tab."
      }
    ]
  },
  {
    id: "configuration/vless",
    category: "configuration",
    title: "VLESS Protocol and REALITY Configuration Guide",
    description: "Optimize VLESS with XTLS, Vision flow, and modern REALITY transport decryption methods in v2rayN.",
    lastUpdated: "July 2026",
    readingTime: "6 min",
    relatedArticleIds: ["configuration/vmess", "configuration/routing"],
    sections: [
      {
        title: "Why VLESS is Preferred",
        id: "vless-intro",
        content: "VLESS is a lightweight, state-free routing protocol that does not require system time sync or encryption overheads. When configured with Xray's Vision and REALITY flow, it offers elite anti-censorship performance."
      },
      {
        title: "REALITY Settings",
        id: "reality",
        content: "Under the Server configuration -> TLS tab:\n1. Choose security: `reality`.\n2. Fill 'SNI' (e.g., yahoo.com or other unsuspicious domestic portals).\n3. Input the server's Public Key and ShortID.\n4. Save settings and click start."
      }
    ]
  },
  {
    id: "configuration/trojan",
    category: "configuration",
    title: "Trojan Protocol Setup in v2rayN",
    description: "Imitate HTTPS web traffic seamlessly using Trojan-GFW rules and certificate configurations.",
    lastUpdated: "May 2026",
    readingTime: "4 min",
    relatedArticleIds: ["configuration/vmess", "configuration/vless"],
    sections: [
      {
        title: "How Trojan Protocol Works",
        id: "trojan-work",
        content: "Trojan hides its connection as standard web transactions (HTTPS). It bypasses deep packet inspection by utilizing genuine TLS certificates and matching web portals."
      }
    ]
  },
  {
    id: "configuration/shadowsocks",
    category: "configuration",
    title: "Shadowsocks & AEAD Ciphers in v2rayN",
    description: "Configuring traditional Shadowsocks nodes (SS-2022) with advanced secure AEAD ciphers.",
    lastUpdated: "April 2026",
    readingTime: "3 min",
    relatedArticleIds: ["configuration/vmess", "comparison/trojan"],
    sections: [
      {
        title: "Security and Ciphers",
        id: "ss-security",
        content: "Legacy ciphers like RC4 or AES-CFB are vulnerable. v2rayN supports modern Shadowsocks-2022 standards like `2022-blake3-aes-128-gcm` and standard AEAD `aes-256-gcm` algorithms."
      }
    ]
  },
  {
    id: "configuration/socks5",
    category: "configuration",
    title: "Configuring SOCKS5 Outbounds",
    description: "Using standard unencrypted or authenticated SOCKS5 proxies inside v2rayN.",
    lastUpdated: "May 2026",
    readingTime: "3 min",
    relatedArticleIds: ["configuration/http"],
    sections: [
      {
        title: "SOCKS5 Outbounds",
        id: "socks5-overview",
        content: "SOCKS5 is a simple protocol suited for local proxy forwarding (e.g., routing Discord or gaming client traffic). It doesn't encrypt headers natively unless wrapped in a TLS tunnel."
      }
    ]
  },
  {
    id: "configuration/http",
    category: "configuration",
    title: "HTTP Proxies and Chain Configurations",
    description: "How to run standard HTTP upstream tunnels or forward traffic through secondary proxies.",
    lastUpdated: "May 2026",
    readingTime: "4 min",
    relatedArticleIds: ["configuration/socks5", "configuration/system-proxy"],
    sections: [
      {
        title: "HTTP Proxy Support",
        id: "http-proxy",
        content: "Set up upstream HTTP forwarding tunnels to browse securely, or feed external software into v2rayN."
      }
    ]
  },
  {
    id: "configuration/tun",
    category: "configuration",
    title: "How to Enable TUN Mode for Global System Routing",
    description: "Route all system application traffic, games, and network adapters globally using TUN virtual adapters.",
    lastUpdated: "July 2026",
    readingTime: "5 min",
    relatedArticleIds: ["configuration/system-proxy", "troubleshooting/tun-not-working"],
    sections: [
      {
        title: "What is TUN Mode?",
        id: "tun-overview",
        content: "Unlike the standard System Proxy (which only redirects HTTP/HTTPS requests on specific ports), TUN mode spawns a virtual network adapter. This routes ALL TCP/UDP traffic from gaming, terminal tools, or VPN layers through your proxy server.",
        alertType: "warning",
        alertContent: "TUN Mode requires Administrator privileges! Right-click v2rayN and select 'Run as Administrator'."
      },
      {
        title: "Activation Steps",
        id: "activate-tun",
        content: "1. Look at the bottom status bar of v2rayN.\n2. Toggle the checkbox for 'TUN Mode' from red (Disabled) to green (Enabled).\n3. Allow the driver installation prompt if Windows asks."
      }
    ]
  },
  {
    id: "configuration/system-proxy",
    category: "configuration",
    title: "System Proxy Settings: Clear and Simple Controls",
    description: "Learn about the difference between Clear System Proxy, Set System Proxy, and PAC routing modes.",
    lastUpdated: "June 2026",
    readingTime: "3 min",
    relatedArticleIds: ["configuration/tun", "troubleshooting/proxy-not-working"],
    sections: [
      {
        title: "The Three Proxy States",
        id: "proxy-states",
        content: "Look at the v2rayN tray icon (or bottom panel). You will see three colors:\n- **Red (Clear System Proxy)**: Normal internet, no traffic passes through v2rayN.\n- **Green (Set System Proxy)**: Global proxying, most browsers automatically route traffic through v2rayN's local port (usually 10809).\n- **Purple (PAC / Rule routing)**: Smart routing. Only blocked or external websites route through proxies, domestic sites bypass."
      }
    ]
  },
  {
    id: "configuration/routing",
    category: "configuration",
    title: "Advanced Routing Rules and Bypassing Domestic Websites",
    description: "Set up routing patterns to route proxy traffic, direct local domains, or block advertisements.",
    lastUpdated: "June 2026",
    readingTime: "5 min",
    relatedArticleIds: ["configuration/dns", "configuration/geosite"],
    sections: [
      {
        title: "Default Rules",
        id: "rules",
        content: "v2rayN provides default routing sets like 'Global', 'Bypass LAN and Mainland' (recommended), and 'Direct'. Customizing these prevents lag on local services."
      }
    ]
  },
  {
    id: "configuration/dns",
    category: "configuration",
    title: "Custom DNS Settings for Anti-Hijacking and Privacy",
    description: "Configuring primary and alternative DNS servers inside v2rayN to resolve addresses safely.",
    lastUpdated: "May 2026",
    readingTime: "4 min",
    relatedArticleIds: ["configuration/routing", "troubleshooting/dns-leak"],
    sections: [
      {
        title: "Configure DNS",
        id: "dns-setup",
        content: "Under Option Settings -> DNS Settings, you can configure standard DNS servers like `1.1.1.1` (Cloudflare) or `8.8.8.8` (Google) for foreign resolution, alongside your ISP's DNS for local resolutions."
      }
    ]
  },
  {
    id: "configuration/geosite",
    category: "configuration",
    title: "Understanding GeoSite Databases",
    description: "Manage and update geosite.dat for intelligent category domain routing.",
    lastUpdated: "May 2026",
    readingTime: "3 min",
    relatedArticleIds: ["configuration/geoip", "configuration/routing"],
    sections: [
      {
        title: "GeoSite Database",
        id: "geosite-db",
        content: "Geosite is a list of domains pre-categorized by country or service (e.g., `geosite:google`, `geosite:netflix`). v2rayN uses this list to route domain resolutions."
      }
    ]
  },
  {
    id: "configuration/geoip",
    category: "configuration",
    title: "GeoIP Configuration for IP-Range Split Tunneling",
    description: "Using geoip.dat to split-tunnel traffic based on geographical IP locations.",
    lastUpdated: "May 2026",
    readingTime: "3 min",
    relatedArticleIds: ["configuration/geosite", "configuration/routing"],
    sections: [
      {
        title: "GeoIP Database",
        id: "geoip-db",
        content: "GeoIP provides geographical boundaries of IP ranges. Setting a routing rule with `geoip:private` and `geoip:cn` ensures all local and private requests remain unproxied (direct)."
      }
    ]
  },
  {
    id: "configuration/subscription",
    category: "configuration",
    title: "Subscription Automation and Group Customization",
    description: "Advanced subscriptions management, renaming, custom user agents, and filters.",
    lastUpdated: "June 2026",
    readingTime: "4 min",
    relatedArticleIds: ["installation/import-sub", "troubleshooting/subscription-failed"],
    sections: [
      {
        title: "Group Configurations",
        id: "group-config",
        content: "Rename groups, set custom request headers, or bypass certificate checks during subscription updates. This helps bypass subscription download blocks."
      }
    ]
  },
  {
    id: "configuration/qr-import",
    category: "configuration",
    title: "QR Code and Clipboard Importing",
    description: "Quick node addition using system screenshots, webcam QR scanning, or link copying.",
    lastUpdated: "April 2026",
    readingTime: "2 min",
    relatedArticleIds: ["installation/import-sub"],
    sections: [
      {
        title: "Importing Nodes Instantly",
        id: "quick-import",
        content: "Copy a link (starting with `vmess://`, `vless://`, `ss://` or `trojan://`), focus the v2rayN main window, and press `Ctrl+V` to import it instantly from the clipboard."
      }
    ]
  },

  // --- TROUBLESHOOTING ARTICLES ---
  {
    id: "troubleshooting/not-connecting",
    category: "troubleshooting",
    title: "Troubleshooting: v2rayN is Not Connecting",
    description: "An easy-to-follow guide to identify why your nodes show active but fail to load websites.",
    lastUpdated: "July 2026",
    readingTime: "4 min",
    relatedArticleIds: ["troubleshooting/connection-timeout", "troubleshooting/proxy-not-working"],
    sections: [
      {
        title: "Check System Time Synchronization",
        id: "time-sync",
        content: "Over 90% of non-connection issues on VMess arise due to incorrect computer local time. Sync Windows time in Settings -> Time & Language -> Sync now.",
        alertType: "error",
        alertContent: "If the local time is offset by more than 90 seconds, connection requests are discarded by the proxy server."
      },
      {
        title: "Test Connection (Delay / Ping)",
        id: "ping-test",
        content: "Press 'Ctrl+T' in v2rayN to test the real connection delay of all servers. If it shows -1ms, the server node itself is offline or blocked."
      }
    ]
  },
  {
    id: "troubleshooting/connection-timeout",
    category: "troubleshooting",
    title: "Fixing Connection Timeout Errors",
    description: "Resolve persistent timeout messages, socket issues, and handshake bottlenecks.",
    lastUpdated: "June 2026",
    readingTime: "4 min",
    relatedArticleIds: ["troubleshooting/not-connecting", "troubleshooting/firewall-issues"],
    sections: [
      {
        title: "Timeout Root Causes",
        id: "timeout-causes",
        content: "1. The node IP is blocked or blacklisted.\n2. Local firewall is blocking the outbound connection.\n3. The server port has changed."
      }
    ]
  },
  {
    id: "troubleshooting/import-failed",
    category: "troubleshooting",
    title: "How to Fix Node Import Failures",
    description: "Decrypting corrupted links, parsing bad JSON strings, and cleaning bad clipboards.",
    lastUpdated: "May 2026",
    readingTime: "3 min",
    relatedArticleIds: ["installation/import-sub", "troubleshooting/json-error"],
    sections: [
      {
        title: "Corrupted Import Syntax",
        id: "corrupted",
        content: "If you get errors import clipboards, verify the string does not have extra leading/trailing spaces or missing trailing equals (=) signs (due to base64 encoding errors)."
      }
    ]
  },
  {
    id: "troubleshooting/subscription-failed",
    category: "troubleshooting",
    title: "Fixing Subscription Update Failed",
    description: "Resolving SSL validation blocks and ISP network interference on sub downloads.",
    lastUpdated: "July 2026",
    readingTime: "4 min",
    relatedArticleIds: ["installation/import-sub", "configuration/subscription"],
    sections: [
      {
        title: "Why Subscription Updates Fail",
        id: "sub-fail-causes",
        content: "Often, the subscription URL server itself is blocked, or the domain requires a proxy to access. Go to Subscription settings, and check 'Enable proxy to update' to download subscriptions through your current working node.",
        alertType: "info",
        alertContent: "Checking 'Enable proxy to update' is a common fix when your subscription host is blocked in your local area."
      }
    ]
  },
  {
    id: "troubleshooting/dns-leak",
    category: "troubleshooting",
    title: "Preventing DNS Leaks in v2rayN",
    description: "Keep your ISP from monitoring which websites you request through secure DNS overrides.",
    lastUpdated: "June 2026",
    readingTime: "5 min",
    relatedArticleIds: ["configuration/dns", "troubleshooting/tun-not-working"],
    sections: [
      {
        title: "Testing for DNS Leaks",
        id: "test-leaks",
        content: "Visit dnsleaktest.com while connected. If you see your ISP DNS servers listed, your queries are leaking."
      },
      {
        title: "Mitigation in v2rayN",
        id: "mitigation",
        content: "Ensure option settings have remote DNS configured to secure servers (e.g. `tcp://8.8.8.8`) and route queries exclusively through proxy adapters."
      }
    ]
  },
  {
    id: "troubleshooting/tls-error",
    category: "troubleshooting",
    title: "Resolving TLS Handshake and Cipher Mismatches",
    description: "How to handle certificate validations, SNI mismatches, and REALITY key issues.",
    lastUpdated: "May 2026",
    readingTime: "4 min",
    relatedArticleIds: ["configuration/vless", "troubleshooting/certificate-error"],
    sections: [
      {
        title: "TLS Handshake Failed",
        id: "tls-handshake",
        content: "This error usually implies that the hostname/SNI is mismatching, the certificate of the server is invalid or expired, or the local PC has antivirus overriding SSL certs.",
        alertType: "warning",
        alertContent: "If using private certs, toggle 'AllowInsecure' to true under option settings temporarily to see if it fixes the loop."
      }
    ]
  },
  {
    id: "troubleshooting/firewall-issues",
    category: "troubleshooting",
    title: "Configuring Windows Defender and Antivirus Whitelists",
    description: "Stop Windows Defender from locking core binaries or deleting xray.exe files.",
    lastUpdated: "July 2026",
    readingTime: "4 min",
    relatedArticleIds: ["installation/windows", "troubleshooting/core-missing"],
    sections: [
      {
        title: "Antivirus False Positives",
        id: "whitelist-def",
        content: "Under Windows Security -> Virus & threat protection -> Exclusions, add your v2rayN extraction folder to the exception lists.",
        alertType: "info",
        alertContent: "Since proxy core binaries intercept and route network streams, generic antivirus packages sometimes flag them as high-risk scripts falsely."
      }
    ]
  },
  {
    id: "troubleshooting/certificate-error",
    category: "troubleshooting",
    title: "Fixing SSL/TLS Certificate Verification Errors",
    description: "How to handle browser issues, untrusted root authorities, and system certificates.",
    lastUpdated: "April 2026",
    readingTime: "3 min",
    relatedArticleIds: ["troubleshooting/tls-error"],
    sections: [
      {
        title: "Certificate Trust",
        id: "cert-trust",
        content: "If Windows prompts that the certificates are untrusted, verify your system root certificates are fully updated using Windows Update."
      }
    ]
  },
  {
    id: "troubleshooting/proxy-not-working",
    category: "troubleshooting",
    title: "Fixing Windows System Proxy Not Working",
    description: "What to do if browsers bypass proxy or other applications ignore connections.",
    lastUpdated: "June 2026",
    readingTime: "4 min",
    relatedArticleIds: ["configuration/system-proxy", "configuration/tun"],
    sections: [
      {
        title: "Proxy Bypass Check",
        id: "bypass-check",
        content: "Check your browser extension settings (like SwitchyOmega). If extensions are active, they will override v2rayN's system proxy configurations."
      }
    ]
  },
  {
    id: "troubleshooting/tun-not-working",
    category: "troubleshooting",
    title: "TUN Mode Virtual Adapter Driver Fixes",
    description: "Re-installing virtual adapter drivers, enabling routing tables, and fixing permissions.",
    lastUpdated: "July 2026",
    readingTime: "5 min",
    relatedArticleIds: ["configuration/tun", "troubleshooting/not-connecting"],
    sections: [
      {
        title: "Reinstalling Sing-Box/Wintun Drivers",
        id: "wintun",
        content: "If TUN Mode fails to start, go to settings and reinstall the `Wintun` virtual card drivers manually. This guarantees proper routing interfaces are registered in Device Manager."
      }
    ]
  },
  {
    id: "troubleshooting/high-cpu",
    category: "troubleshooting",
    title: "High CPU Usage Troubleshooting",
    description: "Resolve server routing loops, verbose logs, and crypto overload loops.",
    lastUpdated: "June 2026",
    readingTime: "3 min",
    relatedArticleIds: ["troubleshooting/high-memory"],
    sections: [
      {
        title: "Busting CPU Loops",
        id: "cpu-loops",
        content: "Disable verbose debug logging in Settings. Logging every network packet to text logs can cause high CPU utilization under intensive download tasks."
      }
    ]
  },
  {
    id: "troubleshooting/high-memory",
    category: "troubleshooting",
    title: "Resolving High Memory Usage and Memory Leaks",
    description: "Managing cache limits, Geo databases size, and active outbounds memory usage.",
    lastUpdated: "June 2026",
    readingTime: "3 min",
    relatedArticleIds: ["troubleshooting/high-cpu"],
    sections: [
      {
        title: "Memory Optimizations",
        id: "mem-opt",
        content: "Ensure you are using the latest compiled stable core engines (Xray/V2ray). Minimize the number of massive geosite categories inside your active memory cache."
      }
    ]
  },
  {
    id: "troubleshooting/core-missing",
    category: "troubleshooting",
    title: "How to Fix 'Core Missing' or 'Failed to start core' Error",
    description: "Resolve the common mistake of launching v2rayN GUI without downloading core binaries.",
    lastUpdated: "July 2026",
    readingTime: "3 min",
    relatedArticleIds: ["installation/windows", "installation/update-guide", "troubleshooting/firewall-issues"],
    sections: [
      {
        title: "Why 'Core Missing' Happens",
        id: "why-missing",
        content: "If you download only the basic v2rayN client (e.g., from some third-party portals), the essential proxy engines (`xray.exe`, `v2ray.exe`) are missing. The client acts purely as a shell.",
        alertType: "error",
        alertContent: "Fix: Download the 'With-Core' package or update cores in Check for Updates menu."
      }
    ]
  },
  {
    id: "troubleshooting/json-error",
    category: "troubleshooting",
    title: "Fixing 'JSON Syntax Error' in GUI Configurations",
    description: "Fixing corrupt config files, bad config.json files, and manual syntax corrections.",
    lastUpdated: "May 2026",
    readingTime: "4 min",
    relatedArticleIds: ["troubleshooting/import-failed"],
    sections: [
      {
        title: "Repairing GUI Configs",
        id: "repair-json",
        content: "If config files are corrupted due to unexpected PC crashes, delete the `config.json` inside the `guiConfigs` folder, and launch v2rayN again to regenerate a clean default setup."
      }
    ]
  },

  // --- FEATURES ARTICLES ---
  {
    id: "features/protocols",
    category: "features",
    title: "Multiple Protocol Support: VMess, VLESS, Trojan, and Shadowsocks",
    description: "A dive into why v2rayN is one of the most versatile proxy interfaces available today.",
    lastUpdated: "May 2026",
    readingTime: "5 min",
    relatedArticleIds: ["configuration/vless", "configuration/vmess", "configuration/trojan"],
    sections: [
      {
        title: "Protocol Versatility",
        id: "versatility",
        content: "v2rayN acts as a wrapper client. It supports VMess, VLESS, Shadowsocks, Trojan, Socks, HTTP, and newer experimental protocols, allowing users to consolidate all node servers into a single interface."
      }
    ]
  },
  {
    id: "features/routing",
    category: "features",
    title: "Highly Customizable Routing Engines",
    description: "Splitting traffic, bypassing specific networks, and advanced domain filters.",
    lastUpdated: "May 2026",
    readingTime: "4 min",
    relatedArticleIds: ["configuration/routing", "configuration/geosite"],
    sections: [
      {
        title: "Routing Customization",
        id: "routing-details",
        content: "You can write custom rules based on domains, IPs, port ranges, and specific source clients, offering total flexibility over which traffic uses security links."
      }
    ]
  },
  {
    id: "features/tun-mode",
    category: "features",
    title: "Native TUN Mode Global Integration",
    description: "Why the virtual network adapter inside v2rayN is a game-changer for terminal, gaming, and systems proxy.",
    lastUpdated: "June 2026",
    readingTime: "4 min",
    relatedArticleIds: ["configuration/tun", "troubleshooting/tun-not-working"],
    sections: [
      {
        title: "Global Intercept",
        id: "global-intercept",
        content: "By creating a virtual adapter, games and programs that do not respect browser-level proxy settings are routed instantly."
      }
    ]
  },

  // --- COMPARISON ARTICLES ---
  {
    id: "comparison/v2rayn-vs-clash",
    category: "comparison",
    title: "v2rayN vs Clash: Which proxy client is right for you?",
    description: "A comprehensive comparative review focusing on configuration styles, performance, protocol support, and ease of use.",
    lastUpdated: "July 2026",
    readingTime: "5 min",
    relatedArticleIds: ["comparison/v2rayn-vs-nekoray", "installation/windows"],
    sections: [
      {
        title: "Introduction",
        id: "comparison-intro",
        content: "v2rayN and Clash are two of the most popular open-source proxies. While Clash relies on custom YAML profiles and has discontinued some official repositories, v2rayN is actively updated with a full Windows user-friendly GUI."
      },
      {
        title: "Core Comparison Table",
        id: "comp-table",
        content: "v2rayN supports advanced subscription systems, on-the-fly core updating, and robust protocol setups directly inside its settings panels, without requiring text-based YAML editing."
      }
    ]
  },
  {
    id: "comparison/v2rayn-vs-nekoray",
    category: "comparison",
    title: "v2rayN vs Nekoray: Battle of Cross-Platform Clients",
    description: "Comparing v2rayN with Nekoray on performance, protocols support, and user interfaces.",
    lastUpdated: "June 2026",
    readingTime: "4 min",
    relatedArticleIds: ["comparison/v2rayn-vs-clash", "installation/linux"],
    sections: [
      {
        title: "Nekoray Overview",
        id: "nekoray-comp",
        content: "Nekoray is a cross-platform client (Qt-based) that supports both Windows and Linux smoothly out of the box, whereas v2rayN is deeply optimized for Windows with native .NET UI controls."
      }
    ]
  },
  {
    id: "comparison/vmess-vs-vless",
    category: "comparison",
    title: "VMess vs VLESS: Protocol Differences Explained",
    description: "A definitive guide on performance differences, encryption levels, and proxy stealth of VMess and VLESS protocols.",
    lastUpdated: "July 2026",
    readingTime: "5 min",
    relatedArticleIds: ["configuration/vless", "configuration/vmess"],
    sections: [
      {
        title: "Protocol Architectures",
        id: "architecture",
        content: "VMess is a stateful encryption protocol, which introduces processing overhead and relies on precise system timing. VLESS is stateless, faster, lighter, and safer when paired with REALITY encryption."
      }
    ]
  }
];
