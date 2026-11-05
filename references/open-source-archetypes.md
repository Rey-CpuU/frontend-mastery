# Open-Source Archetypes & Reference Codebases

Katalog referensi source code terbuka (open-source) terkurasi untuk 26 tipe website dan sistem, digunakan sebagai acuan arsitektur komponen, layout, visual craftsmanship, dan ergonomi form di `frontend-design-mastery`.

---

## I. Kategori Website (12 Tipe)

### 1. Wiki / Dokumentasi
| Nama repo | URL | Stack | Lisensi | Bintang | Update terakhir | Kenapa bagus jadi contoh |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Docusaurus** | https://github.com/facebook/docusaurus | React, Docusaurus, MDX | MIT | ~66.6k | 2026-11 | Standar industri untuk hierarki navigasi, sidebar bertingkat, responsive search, dan MDX preview. |
| **Nextra** | https://github.com/shuding/nextra | Next.js, React, MDX | MIT | ~13.9k | 2026-06 | Arsitektur Next.js MDX paling bersih dan ringan; ideal untuk panduan estetika minimalis modern. |
| **Starlight** | https://github.com/withastro/starlight | Astro, Tailwind, MDX | MIT | ~9.5k | 2026-11 | Zero-JS baseline, dark mode tanpa flicker, dan tipografi konten yang mematuhi standar rasio kontras tinggi. |

### 2. Crowdfunding / Donasi
| Nama repo | URL | Stack | Lisensi | Bintang | Update terakhir | Kenapa bagus jadi contoh |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Open Collective Frontend** | https://github.com/opencollective/opencollective-frontend | Next.js, GraphQL, React | MIT | ~897 | 2026-11 | Sistem donasi transparan skala global dengan visualisasi budget ledger, tier langganan, dan checkout flow. |
| **Selfstarter** | https://github.com/apigy/selfstarter | Ruby on Rails, HTML5/CSS | MIT | ~3.1k | Legacy | Pola klasik kampanye Kickstarter independen; struktur visual progress bar target dana dan backer timeline. |
| **Chapter** | https://github.com/freeCodeCamp/chapter | React, Next.js, GraphQL, TypeScript | BSD-3-Clause | ~1.9k | 2024-12 | Platform event komunitas dan penggalangan dana open-source dari freeCodeCamp dengan UX form intuitif. |

### 3. Marketplace (E-Commerce / Storefront)
| Nama repo | URL | Stack | Lisensi | Bintang | Update terakhir | Kenapa bagus jadi contoh |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Medusa** | https://github.com/medusajs/medusa | Node.js, Next.js, Medusa SDK | MIT (Core) | ~37.1k | 2026 Aktif | Ekosistem e-commerce open-source paling populer; storefront Next.js modular dengan multi-currency & cart drawer. |
| **Vercel Commerce** | https://github.com/vercel/commerce | Next.js App Router, Tailwind CSS | MIT | ~14.3k | 2026 Aktif | Tolok ukur Web Vitals & performa e-commerce; image optimization, dynamic filter facet, dan transisi mulus. |
| **Saleor React Storefront** | https://github.com/saleor/react-storefront | Next.js, React, GraphQL, Tailwind | FSL-1.1 (Apache-2.0 Future) | ~1.6k | 2026 Aktif | Headless GraphQL storefront dengan desain minimalis elegan dan penanganan state checkout multi-step. |

### 4. Media Sosial
| Nama repo | URL | Stack | Lisensi | Bintang | Update terakhir | Kenapa bagus jadi contoh |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Bluesky Social App** | https://github.com/bluesky-social/social-app | React Native Web, Expo, TypeScript | MIT | ~18.4k | 2026 Aktif | Arsitektur virtualized infinite timeline, multi-tab feed switcher, dan layout responsif web/mobile. |
| **Elk** | https://github.com/elk-zone/elk | Nuxt 3, Vue 3, Tailwind CSS | MIT | ~6.0k | 2026 Aktif | Desain UI micro-blogging paling mulus; gestur swipe, transisi page instan, dan tipografi ramah mata. |
| **Mattermost Webapp** | https://github.com/mattermost/mattermost-webapp | React, Redux, TypeScript | Apache-2.0 | ~2.3k | 2026 Aktif | Antarmuka chat & kanal kolaborasi enterprise dengan penanganan streaming websocket dan modal interaktif. |

### 5. Streaming (Video / Musik)
| Nama repo | URL | Stack | Lisensi | Bintang | Update terakhir | Kenapa bagus jadi contoh |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Owncast** | https://github.com/owncast/owncast | React, Go, HLS/WebRTC | MIT | ~11.6k | 2026 Aktif | Alternatif mandiri Twitch; integrasi video player dengan chat room real-time, viewer counter, dan pop-out player. |
| **Feishin** | https://github.com/jeffvli/feishin | React, TypeScript, Electron/Web | GPL-3.0 ⚠️ | ~10.3k | 2026 Aktif | Pemutar musik desktop/web dengan UI polished setara Spotify; manajemen antrean lagu, equalizer, dan visualizer. |
| **Shaka Player** | https://github.com/shaka-project/shaka-player | JavaScript, HTML5, MSE/EME | Apache-2.0 | ~8.3k | 2026 Aktif | Library pemutar video streaming adaptif dari Google; kontrol UI video standar aksesibilitas tinggi dan multi-audio track. |

### 6. Undangan Digital (Wedding / Event)
| Nama repo | URL | Stack | Lisensi | Bintang | Update terakhir | Kenapa bagus jadi contoh |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Undangan Nikah (gorillaworkout)** | https://github.com/gorillaworkout/undangan-nikah | Next.js, TypeScript, Tailwind, Three.js | MIT | ~1 | 2025/2026 | Desain visual mewah dengan efek 3D, cover interaktif personal (`?to=Tamu`), RSVP, dan amplop dompet digital. |
| **Wedding Invitation (andikaputradev)** | https://github.com/andikaputradev/wedding-invitation | Next.js App Router, Tailwind, Framer Motion | MIT | ~19 | 2025/2026 | Animasi scroll bertahap, countdown timer akurat, dan integrasi backend gratis Google Sheets untuk buku tamu. |
| **Wedding Invitation (Pepryan)** | https://github.com/Pepryan/wedding-invitation | Next.js, Tailwind CSS, TypeScript | MIT | ~7 | 2025/2026 | Template mobile-first dengan audio player background, galeri lightbox foto, dan penunjuk arah Google Maps. |

### 7. Link-in-bio
| Nama repo | URL | Stack | Lisensi | Bintang | Update terakhir | Kenapa bagus jadi contoh |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **BioDrop** | https://github.com/EddieHubCommunity/BioDrop | Next.js, Tailwind CSS, TypeScript | MIT | ~5.7k | 2026 Aktif | Platform link-in-bio open-source terbesar (eks-LinkFree); profil interaktif, showcase project, dan event hub. |
| **LittleLink** | https://github.com/sethcottle/littlelink | HTML5, CSS3, Vanilla JS | MIT | ~3.1k | 2025/2026 | Alternatif Linktree super ringan tanpa framework; contoh sempurna rasio kontras tombol dan performa 100/100 Lighthouse. |
| **Dub.co** | https://github.com/dubinc/dub | Next.js, Tailwind CSS, Tremor | AGPL-3.0 ⚠️ | ~25.1k | 2026 Aktif | Tolok ukur kelas dunia untuk shortlink & bio hub dengan analitik geolokasi, QR code generator, dan custom domain. |

### 8. PWA (Progressive Web App)
| Nama repo | URL | Stack | Lisensi | Bintang | Update terakhir | Kenapa bagus jadi contoh |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **PROXX** | https://github.com/GoogleChromeLabs/proxx | Preact, Web Workers, Canvas, Wasm | Apache-2.0 | ~1.4k | 2024 | Referensi PWA resmi Google Chrome Labs; rendering super cepat, offline cache agresif, dan dukungan feature phone. |
| **Next-PWA** | https://github.com/shadowwalker/next-pwa | Next.js, Workbox, Service Worker | MIT | ~4.1k | 2025/2026 | Referensi standar implementasi Workbox service worker, web app manifest, dan offline fallback di Next.js. |
| **Hacker News PWAs** | https://github.com/tastejs/hacker-news-pwas | JavaScript, Web Components | MIT | ~2.4k | 2024 | Benchmark resmi implementasi PWA lintas framework; fokus pada Time-to-Interactive (TTI) dan First Contentful Paint. |

### 9. Portal Lowongan Kerja (Job Board)
| Nama repo | URL | Stack | Lisensi | Bintang | Update terakhir | Kenapa bagus jadi contoh |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Laravel Job Board** | https://github.com/aschmelyun/laravel-job-board | Laravel, Tailwind CSS, Alpine.js | MIT | ~172 | 2025 | Tampilan bersih bergaya RemoteOK; filter kategori instan, checkout postingan via Stripe, dan SEO microdata Schema.org. |
| **Bordful** | https://github.com/craftled/bordful | Next.js, Tailwind CSS, Airtable API | MIT | ~73 | 2025 | Arsitektur minimalis modern berbasis Next.js; memanfaatkan Airtable sebagai headless database lowongan. |
| **BitRecruit Platform** | https://github.com/dawidolko/BitRecruit-Platform-NextJS | Next.js, React, Mantine UI, Tailwind | MIT | ~1 | 2025 | Desain UI khusus rekrutmen IT; drawer detail pekerjaan, tag gaji transparan, dan filter multi-level rapi. |

### 10. Web Edukasi / Kursus Online (LMS)
| Nama repo | URL | Stack | Lisensi | Bintang | Update terakhir | Kenapa bagus jadi contoh |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **freeCodeCamp** | https://github.com/freeCodeCamp/freeCodeCamp | Next.js, TypeScript, React | BSD-3-Clause | ~458.6k | 2026 Aktif | Platform kurikulum interaktif terbesar di dunia; split-pane editor kode, tes otomatis, dan pelacakan kurikulum bertahap. |
| **Courselit** | https://github.com/codelitdev/courselit | Next.js, Node.js, TypeScript | AGPL-3.0 ⚠️ | ~1.3k | 2026 Aktif | Platform kursus daring mandiri; video curriculum tree, sistem pembayaran terintegrasi, dan progress bar siswa. |
| **Open edX Learning** | https://github.com/openedx/frontend-app-learning | React, Redux, Paragon UI | AGPL-3.0 ⚠️ | ~71 | 2026 Aktif | Microfrontend resmi Open edX untuk pengalaman belajar siswa di tingkat universitas global. |

### 11. Web Undian / Polling / Survei
| Nama repo | URL | Stack | Lisensi | Bintang | Update terakhir | Kenapa bagus jadi contoh |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **SurveyJS Library** | https://github.com/surveyjs/survey-library | React, Vue, Angular, TypeScript | MIT | ~4.9k | 2026 Aktif | Komponen engine form survei multi-page paling lengkap; percabangan logika dinamis, validasi input, dan export data. |
| **HeyForm** | https://github.com/HeyForm/HeyForm | Next.js, React, Node.js | AGPL-3.0 ⚠️ | ~9.1k | 2025/2026 | Alternatif Typeform open-source; transisi keyboard-driven navigasi per pertanyaan dengan animasi transisi halus. |
| **Formbricks** | https://github.com/formbricks/formbricks | Next.js, Tailwind CSS, TypeScript | AGPL-3.0 ⚠️ | ~13.2k | 2026 Aktif | Survey platform modern untuk in-app feedback pengguna; kustomisasi widget micro-survey dan dashboard analitik respon. |

### 12. Web AI (Chatbot / Generator)
| Nama repo | URL | Stack | Lisensi | Bintang | Update terakhir | Kenapa bagus jadi contoh |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Open WebUI** | https://github.com/open-webui/open-webui | SvelteKit, Tailwind CSS, Python | MIT | ~157.8k | 2026 Aktif | Antarmuka AI lokal & API terlengkap; markdown streaming, artifact preview, visual branching chat, dan voice modal. |
| **Lobe Chat** | https://github.com/LobeHub/lobe-chat | Next.js, Ant Design, Tailwind CSS | Apache-2.0 | ~84.0k | 2026 Aktif | Standar emas visual workspace AI; transisi panel mulus, visualisasi function calling, plugin store, dan audio synthesizer. |
| **Vercel AI Chatbot** | https://github.com/vercel/ai-chatbot | Next.js App Router, Vercel AI SDK | Apache-2.0 | ~21.0k | 2026 Aktif | Pola desain resmi AI generasi baru; integrasi Generative UI (rendering komponen dinamis di dalam chat stream). |

---

## II. Kategori System (14 Tipe)

### 1. Payment Gateway / Billing
| Nama repo | URL | Stack | Lisensi | Bintang | Update terakhir | Kenapa bagus jadi contoh |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Crater** | https://github.com/crater-invoice/crater | Vue.js, Laravel, Tailwind CSS | AGPL-3.0 ⚠️ | ~8.4k | 2026 Aktif | Dashboard billing & faktur profesional; pembuatan invoice interaktif, pembayaran online, dan laporan keuangan komprehensif. |
| **Kill Bill** | https://github.com/killbill/killbill | Java, Killbill Admin Web UI | Apache-2.0 | ~5.8k | 2026 Aktif | Platform recurring billing enterprise; pengelolaan siklus langganan kompleks, integrasi multi-gateway, dan invoice engine. |
| **Tier** | https://github.com/tierrun/tier | Go, React, Stripe SDK | Apache-2.0 | ~969 | 2024/2025 | Sistem penetapan model harga dan usage-based metering; sinkronisasi otomatis skema harga langsung ke Stripe. |

### 2. Manajemen Proyek (Kanban)
| Nama repo | URL | Stack | Lisensi | Bintang | Update terakhir | Kenapa bagus jadi contoh |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Focalboard** | https://github.com/mattermost/focalboard | React, Redux, Go | MIT (Core) | ~26.5k | 2026 Aktif | Alternatif Trello/Notion dari Mattermost; drag-and-drop kartu berdensitas tinggi, multi-view (board, table, calendar). |
| **Wekan** | https://github.com/wekan/wekan | Meteor, JavaScript, HTML5 | MIT | ~21.2k | 2026 Aktif | Kanban klasik open-source murni; penanganan swimlane, label kustom, dan otomasi kartu berbasis aturan. |
| **Planka** | https://github.com/plankanban/planka | React, Redux, PostgreSQL | AGPL-3.0 ⚠️ | ~12.7k | 2026 Aktif | Desain papan Kanban modern minimalis; kolaborasi real-time melalui WebSocket dan lampiran file kartu. |

### 3. Manajemen Dokumen / Arsip (DMS)
| Nama repo | URL | Stack | Lisensi | Bintang | Update terakhir | Kenapa bagus jadi contoh |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Paperless-ngx** | https://github.com/paperless-ngx/paperless-ngx | Angular, TypeScript, Python, OCR | GPL-3.0 ⚠️ | ~47.7k | 2026 Aktif | Sistem arsip dokumen digital cerdas; OCR otomatis, deteksi tag berbasis ML, split-view viewer PDF, dan pencarian instan. |
| **Teedy (Docs)** | https://github.com/sismics/docs | Vue.js, Java, Docker | GPL-2.0 ⚠️ | ~2.6k | 2025/2026 | DMS ringan dengan arsitektur UI bersih; preview file multimedia multi-format, kontrol revisi, dan metadata form. |
| **Mayan EDMS** | https://github.com/mayan-edms/mayan-edms | Django, Python, JavaScript | Apache-2.0 | ~850 | 2026 Aktif | Standar kepatuhan arsip enterprise; workflow approval dokumen, validasi tanda tangan kriptografis, dan audit trail ketat. |

### 4. Perpustakaan (ILS / Library Management)
| Nama repo | URL | Stack | Lisensi | Bintang | Update terakhir | Kenapa bagus jadi contoh |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **SLiMS (Senayan)** | https://github.com/slims/slims9_bulian | PHP, MySQL, jQuery, Bootstrap | GPL-3.0 ⚠️ | ~252 | 2026 Aktif | Standar perpustakaan paling populer di Indonesia; OPAC pencarian buku, pencetakan barcode kartu, dan sirkulasi peminjaman. |
| **Koha** | https://github.com/Koha-Community/Koha | Perl, JavaScript, MariaDB | GPL-3.0 ⚠️ | ~598 | 2026 Aktif | Sistem automasi perpustakaan (ILS) pertama dan terlengkap di dunia; standar MARC21/Z39.50 dan denda peminjaman. |
| **Evergreen** | https://github.com/evergreen-library-system/Evergreen | Perl, Angular, OpenSRF | GPL-2.0 ⚠️ | ~157 | 2026 Aktif | Arsitektur ILS untuk konsorsium perpustakaan besar dengan jutaan koleksi terdistribusi antar cabang daerah. |

### 5. Klinik / Rumah Sakit (HIS / EMR / Clinic)
| Nama repo | URL | Stack | Lisensi | Bintang | Update terakhir | Kenapa bagus jadi contoh |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Medplum** | https://github.com/medplum/medplum | Next.js, React, Mantine, TypeScript | Apache-2.0 | ~2.8k | 2026 Aktif | Tolok ukur kesehatan digital modern berbasis standar FHIR; form rekam medis, antrean pasien, dan integrasi hasil lab. |
| **HospitalRun** | https://github.com/hospitalrun/hospitalrun-frontend | React, Redux, Offline PWA | MIT | ~6.9k | 2025 | Desain UI klinik ramah dokter di wilayah pedesaan; navigasi cepat, alur rawat jalan, dan sinkronisasi offline. |
| **OpenMRS ESM Core** | https://github.com/openmrs/openmrs-esm-core | React, Microfrontends, Single-SPA | MPL-2.0 | ~101 | 2026 Aktif | Arsitektur microfrontend modular untuk rumah sakit skala internasional dengan fleksibilitas plugin resep dan diagnosis. |

### 6. Hotel / Properti (PMS - Property Management System)
| Nama repo | URL | Stack | Lisensi | Bintang | Update terakhir | Kenapa bagus jadi contoh |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **MicroRealEstate** | https://github.com/microrealestate/microrealestate | TypeScript, React, Next.js, Node.js | MIT | ~1.2k | 2026 Aktif | Manajemen unit sewa apartemen & ruko; pelacakan jatuh tempo sewa, pembuatan kwitansi otomatis, dan portal tenant. |
| **QloApps** | https://github.com/Qloapps/QloApps | PHP, MySQL, Smarty/Bootstrap | OSL-3.0 ⚠️ | ~14.5k | 2026 Aktif | PMS hotel terlengkap; kalender grid ketersediaan kamar, penetapan harga musiman, dan integrasi reservasi online. |
| **Property Web Builder** | https://github.com/etewiah/property_web_builder | Ruby on Rails, Bootstrap | MIT | ~649 | 2025 | Manajemen listing properti dan portal agen; pencarian interaktif kriteria unit dan konversi calon penyewa. |

### 7. Logistik / Tracking
| Nama repo | URL | Stack | Lisensi | Bintang | Update terakhir | Kenapa bagus jadi contoh |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Traccar Web** | https://github.com/traccar/traccar-web | React, Material-UI, Vite, TypeScript | Apache-2.0 | ~1.2k | 2026 Aktif | Dashboard pelacakan posisi GPS real-time; visualisasi rute perjalanan pada peta, laporan henti kendaraan, dan geofencing. |
| **OpenBoxes** | https://github.com/openboxes/openboxes | Groovy, Grails, React, Bootstrap | EPL-1.0 | ~921 | 2026 Aktif | Sistem logistik rantai pasok farmasi; pelacakan batch kedaluwarsa obat, pengiriman cold-chain, dan stock movement. |
| **Open Logistics SIL** | https://github.com/open-logistics-foundation | Java, Angular, TypeScript | Open Logistics Lic | ~15+ | 2025/2026 | Solusi arsitektur referensi dari Open Logistics Foundation untuk tracking status paket multimodal dan logistik peti kemas. |

### 8. Manajemen Armada / GPS (Fleet Management)
| Nama repo | URL | Stack | Lisensi | Bintang | Update terakhir | Kenapa bagus jadi contoh |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Traccar Core & Server** | https://github.com/traccar/traccar | Java, Web API, Protokol GPS | Apache-2.0 | ~8.1k | 2026 Aktif | Server GPS tracking open source #1 dunia; mendukung 200+ protokol tracker kendaraan dan manajemen konsumsi bahan bakar. |
| **OsmAnd** | https://github.com/osmandapp/OsmAnd | Java, C++, OpenStreetMap | GPL-3.0 ⚠️ | ~6.1k | 2026 Aktif | Engine navigasi peta offline dan perekaman rute telemetri kendaraan di area tanpa sinyal seluler. |
| **Open Fleet Management** | https://github.com/opendatacenter | Python, JavaScript, Leaflet | MIT | ~120+ | 2025 | Dashboard manajemen armada ringan; jadwal pemeliharaan rutin, status utilitas kendaraan, dan log riwayat pengemudi. |

### 9. Donasi / Zakat
| Nama repo | URL | Stack | Lisensi | Bintang | Update terakhir | Kenapa bagus jadi contoh |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Zaqat (syauqi)** | https://github.com/syauqi/zaqat | PHP, Laravel, Bootstrap | MIT | ~54 | 2025 | Sistem informasi digitalisasi panitia zakat masjid (DKM); pendataan muzakki, mustahik, dan pelaporan distribusi beras/uang. |
| **Zakat Calculator (mrabdussalam)** | https://github.com/mrabdussalam/zakat-calculator | React, TypeScript, Tailwind CSS | MIT | ~30 | 2025 | Kalkulator zakat modern lintas aset (emas, perak, tabungan, saham, properti, kripto) dengan antarmuka bersih dan responsif. |
| **Zakat Engine (tawwfik)** | https://github.com/tawwfik/zakat-calculator | PHP, Laravel, Fiqh Rules Engine | MIT | ~10 | 2025 | Engine perhitungan fiqih zakat akurat; mendukung 4 madzhab dengan nisab emas/perak dinamis. |

### 10. E-voting
| Nama repo | URL | Stack | Lisensi | Bintang | Update terakhir | Kenapa bagus jadi contoh |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Snapshot** | https://github.com/snapshot-labs/snapshot | Vue 3, TypeScript, Tailwind CSS | MIT | ~9.1k | 2026 Aktif | Platform voting tata kelola terdesentralisasi terbesar di dunia; penandatanganan suara off-chain tanpa gas fee dan audit proposal. |
| **Helios Voting** | https://github.com/benadida/helios-server | Python, Django, JavaScript | Apache-2.0 | ~926 | 2025 | Sistem pemilihan daring aman dengan verifikasi enkripsi homomorfik (pemilih bisa memverifikasi suara tanpa membuka pilihan). |
| **Aragon Govern** | https://github.com/aragon/govern | Solidity, TypeScript, React | GPL-3.0 ⚠️ | ~155 | 2025 | Framework pemungutan suara & persetujuan proposal organisasi dengan eksekusi bukti transaksi on-chain transparan. |

### 11. Monitoring Jaringan / ISP (Billing, Hotspot)
| Nama repo | URL | Stack | Lisensi | Bintang | Update terakhir | Kenapa bagus jadi contoh |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **NetBox** | https://github.com/netbox-community/netbox | Python, Django, React, HTMX | Apache-2.0 | ~21.8k | 2026 Aktif | Sumber kebenaran jaringan (Network Source of Truth) standar global; inventaris rack server, pengalamatan IP, dan kabel VLAN. |
| **LibreNMS** | https://github.com/librenms/librenms | PHP, Laravel, Vue.js, SNMP | GPL-3.0 ⚠️ | ~5.0k | 2026 Aktif | Sistem monitoring performa perangkat jaringan otomatis via SNMP; grafik lalu lintas bandwidth port dan pemetaan topologi. |
| **Mikhmon V3** | https://github.com/laksa19/mikhmonv3 | PHP, Vanilla JS, Bootstrap | GPL-2.0 ⚠️ | ~476 | 2025 | Aplikasi manajemen hotspot & voucher MikroTik paling populer di Indonesia; cetak voucher thermal dan dashboard omset harian. |

### 12. IoT Dashboard
| Nama repo | URL | Stack | Lisensi | Bintang | Update terakhir | Kenapa bagus jadi contoh |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **ThingsBoard** | https://github.com/thingsboard/thingsboard | Angular, TypeScript, Java, MQTT | Apache-2.0 | ~22.6k | 2026 Aktif | Platform IoT open-source #1 dunia; visualisasi gauge sensor suhu/tekanan, rule chain engine otomatis, dan device manager. |
| **Freeboard** | https://github.com/freeboard/freeboard | HTML5, Vanilla JavaScript, CSS3 | MIT | ~6.5k | 2024/2025 | Dashboard client-side super ringan tanpa server khusus; widget drag-and-drop langsung tersambung ke MQTT atau REST API. |
| **Node-RED Dashboard** | https://github.com/node-red/node-red-dashboard | Vue.js, Node.js, WebSocket | Apache-2.0 | ~1.4k | 2026 Aktif | Antarmuka visual otomasi IoT; kontrol saklar relai, slider intensitas, dan grafik tren telemetri waktu-nyata via WebSocket. |

### 13. Approval / Workflow (Cuti, Surat)
| Nama repo | URL | Stack | Lisensi | Bintang | Update terakhir | Kenapa bagus jadi contoh |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Novu** | https://github.com/novuhq/novu | React, TypeScript, Tailwind, NestJS | MIT | ~40.3k | 2026 Aktif | Infrastruktur approval & notifikasi enterprise; visual canvas workflow builder, step delay, dan multi-channel delivery. |
| **Activepieces** | https://github.com/activepieces/activepieces | Angular, TypeScript, Node.js | MIT (Community) | ~25.4k | 2026 Aktif | Alternatif Zapier open-source; pembuatan diagram alur kerja visual untuk otomasi trigger-action, percabangan, dan persetujuan. |
| **Temporal UI** | https://github.com/temporalio/ui | Svelte, TypeScript, Tailwind CSS | MIT | ~447 | 2026 Aktif | Frontend pelacakan eksekusi workflow tahan-banting berdurasi panjang; timeline event hierarkis dan penanganan retry otomatis. |

### 14. Produksi / Manufaktur (MES)
| Nama repo | URL | Stack | Lisensi | Bintang | Update terakhir | Kenapa bagus jadi contoh |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **ERPNext Manufacturing** | https://github.com/frappe/erpnext | Python, JavaScript, MariaDB | GPL-3.0 ⚠️ | ~41.0k | 2026 Aktif | Modul manufaktur open-source paling matang; Bill of Materials (BOM) multi-level, kartu kerja workstation, dan pelacakan batch. |
| **Carbon** | https://github.com/crbnos/carbon | React, TypeScript, Supabase, Tailwind | Apache-2.0 / BSL | ~2.8k | 2026 Aktif | Platform manufaktur modern generasi baru (ERP/MRP/MES) berbasis TypeScript murni dengan pelacakan lantai produksi (shop-floor). |
| **WebErpMesv2** | https://github.com/SMEWebify/WebErpMesv2 | PHP, Laravel, React | LGPL-3.0 ⚠️ | ~227 | 2025/2026 | Aplikasi MES khusus bengkel permesinan & fabrikasi; penjadwalan kapasitas terbatas, rute pengerjaan mesin, dan faktur. |
