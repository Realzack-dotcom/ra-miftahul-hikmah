/* =====================================================
   RA MIFTAHUL HIKMAH
   SISTEM PENDAFTARAN SISWA
   SUPABASE + PEMBAYARAN + WHATSAPP
===================================================== */


/* =====================================================
   SUPABASE
===================================================== */

const SUPABASE_URL =
    "https://ervhwjrlqcsobawwhkpf.supabase.co";


/*
   MASUKKAN PUBLISHABLE KEY SUPABASE KAMU DI SINI
*/
const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_u48E-Q-RjdFRFLC_Cv3rmg_gD0Z3y2K";


/* =====================================================
   CEK SUPABASE
===================================================== */

if (!window.supabase) {

    alert(
        "❌ Supabase gagal dimuat.\n\n" +
        "Pastikan internet aktif dan library Supabase sudah dimuat."
    );

    throw new Error(
        "Supabase library tidak ditemukan."
    );
}


if (
    !SUPABASE_PUBLISHABLE_KEY ||
    SUPABASE_PUBLISHABLE_KEY ===
        "PASTE_PUBLISHABLE_KEY_KAMU_DI_SINI"
) {

    alert(
        "⚠️ Publishable Key Supabase belum diisi."
    );

    throw new Error(
        "SUPABASE_PUBLISHABLE_KEY belum diisi."
    );
}


/* =====================================================
   CLIENT SUPABASE
===================================================== */

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_PUBLISHABLE_KEY
    );


/* =====================================================
   NOMOR WHATSAPP SEKOLAH
===================================================== */

const NOMOR_WHATSAPP_SEKOLAH =
    "6281398754451";


/* =====================================================
   ELEMENT FORM
===================================================== */

const form =
    document.getElementById(
        "registrationForm"
    );


const popup =
    document.getElementById(
        "successPopup"
    );


/* =====================================================
   ELEMENT PEMBAYARAN
===================================================== */

const metodePembayaran =
    document.getElementById(
        "metodePembayaran"
    );


const nominalPembayaran =
    document.getElementById(
        "nominalPembayaran"
    );


const buktiTransfer =
    document.getElementById(
        "buktiTransfer"
    );


const buktiTransferGroup =
    document.getElementById(
        "buktiTransferGroup"
    );


const buktiTransferPreview =
    document.getElementById(
        "buktiTransferPreview"
    );


const buktiTransferPreviewImg =
    document.getElementById(
        "buktiTransferPreviewImg"
    );


const submitButton =
    form
        ? form.querySelector(
            'button[type="submit"]'
        )
        : null;


/* =====================================================
   ATUR METODE PEMBAYARAN
===================================================== */

function updateMetodePembayaran() {

    if (!metodePembayaran) {
        return;
    }


    const metode =
        metodePembayaran.value;


    /* =================================================
       TRANSFER
    ================================================= */

    if (metode === "Transfer") {

        /*
           Nominal wajib diisi
        */

        if (nominalPembayaran) {

            nominalPembayaran.required =
                true;

            nominalPembayaran.setAttribute(
                "required",
                ""
            );

        }


        /*
           Tampilkan upload bukti
        */

        if (buktiTransferGroup) {

            buktiTransferGroup.style.display =
                "block";

        }


        /*
           Bukti transfer wajib
        */

        if (buktiTransfer) {

            buktiTransfer.required =
                true;

            buktiTransfer.setAttribute(
                "required",
                ""
            );

        }

    }


    /* =================================================
       CASH
    ================================================= */

    else if (metode === "Cash") {

        /*
           Nominal TIDAK WAJIB
        */

        if (nominalPembayaran) {

            nominalPembayaran.required =
                false;

            nominalPembayaran.removeAttribute(
                "required"
            );

            nominalPembayaran.value =
                "";

        }


        /*
           Sembunyikan upload bukti
        */

        if (buktiTransferGroup) {

            buktiTransferGroup.style.display =
                "none";

        }


        /*
           Bukti transfer TIDAK WAJIB
        */

        if (buktiTransfer) {

            buktiTransfer.required =
                false;

            buktiTransfer.removeAttribute(
                "required"
            );

            buktiTransfer.value =
                "";

        }


        /*
           Sembunyikan preview
        */

        if (buktiTransferPreview) {

            buktiTransferPreview.style.display =
                "none";

        }


        if (buktiTransferPreviewImg) {

            buktiTransferPreviewImg.src =
                "";

        }

    }

}


/*
   Jalankan langsung ketika halaman dibuka.
   
   Ini penting supaya kalau pilihan awalnya
   Cash, nominal langsung TIDAK required.
*/

updateMetodePembayaran();


/*
   Jalankan setiap kali metode pembayaran berubah.
*/

if (metodePembayaran) {

    metodePembayaran.addEventListener(
        "change",
        updateMetodePembayaran
    );

}


/* =====================================================
   PREVIEW BUKTI TRANSFER
===================================================== */

if (buktiTransfer) {

    buktiTransfer.addEventListener(
        "change",
        function () {

            const file =
                this.files[0];


            /*
               Tidak ada file
            */

            if (!file) {

                if (buktiTransferPreview) {

                    buktiTransferPreview.style.display =
                        "none";

                }

                if (buktiTransferPreviewImg) {

                    buktiTransferPreviewImg.src =
                        "";

                }

                return;

            }


            /*
               Cek format file
            */

            if (
                !file.type.startsWith(
                    "image/"
                )
            ) {

                alert(
                    "❌ Bukti transfer harus berupa gambar."
                );

                this.value =
                    "";

                return;

            }


            /*
               Maksimal 5 MB
            */

            if (
                file.size >
                5 * 1024 * 1024
            ) {

                alert(
                    "❌ Ukuran bukti transfer maksimal 5 MB."
                );

                this.value =
                    "";

                return;

            }


            /*
               Tampilkan preview
            */

            const reader =
                new FileReader();


            reader.onload =
                function (event) {

                    if (buktiTransferPreviewImg) {

                        buktiTransferPreviewImg.src =
                            event.target.result;

                    }


                    if (buktiTransferPreview) {

                        buktiTransferPreview.style.display =
                            "block";

                    }

                };


            reader.readAsDataURL(
                file
            );

        }
    );

}


/* =====================================================
   FORMAT RUPIAH
===================================================== */

function formatRupiah(
    angka
) {

    const nilai =
        Number(angka) || 0;


    return nilai.toLocaleString(
        "id-ID"
    );

}


/* =====================================================
   FORMAT TANGGAL
===================================================== */

function formatTanggal(
    tanggal
) {

    if (!tanggal) {

        return "-";

    }


    const date =
        new Date(
            tanggal +
            "T00:00:00"
        );


    return date.toLocaleDateString(
        "id-ID",
        {
            day: "numeric",
            month: "long",
            year: "numeric"
        }
    );

}


/* =====================================================
   UPLOAD BUKTI TRANSFER
===================================================== */

async function uploadBuktiTransfer(
    file,
    namaAnak
) {

    if (!file) {

        return "";

    }


    /*
       Buat nama anak menjadi aman untuk nama file
    */

    const namaAman =
        namaAnak
            .toLowerCase()
            .replace(
                /[^a-z0-9]/g,
                "-"
            )
            .replace(
                /-+/g,
                "-"
            )
            .replace(
                /^-|-$/g,
                ""
            );


    /*
       Ambil ekstensi file
    */

    const ekstensi =
        file.name
            .split(".")
            .pop()
            .toLowerCase();


    /*
       Nama file
    */

    const namaFile =
        "pendaftaran-" +
        (
            namaAman ||
            "siswa"
        ) +
        "-" +
        Date.now() +
        "." +
        ekstensi;


    /*
       Folder penyimpanan
    */

    const filePath =
        "pendaftaran/" +
        namaFile;


    console.log(
        "📸 Mengupload bukti:",
        filePath
    );


    /*
       Upload ke Storage
    */

    const {
        error: uploadError
    } =
        await supabaseClient
            .storage
            .from("post-images")
            .upload(
                filePath,
                file,
                {
                    cacheControl: "3600",
                    upsert: false
                }
            );


    if (uploadError) {

        console.error(
            "❌ Upload error:",
            uploadError
        );

        throw new Error(
            "Gagal mengupload bukti transfer: " +
            uploadError.message
        );

    }


    /*
       Ambil URL publik
    */

    const {
        data
    } =
        supabaseClient
            .storage
            .from("post-images")
            .getPublicUrl(
                filePath
            );


    if (
        !data ||
        !data.publicUrl
    ) {

        throw new Error(
            "URL bukti transfer tidak berhasil dibuat."
        );

    }


    console.log(
        "✅ Bukti berhasil diupload:",
        data.publicUrl
    );


    return data.publicUrl;

}


/* =====================================================
   BUAT PESAN WHATSAPP
===================================================== */

function buatPesanWhatsApp(
    data
) {

    let pesan =

        "🎓 *PENDAFTARAN SISWA BARU*" +
        "\n" +

        "🏫 *Ra Miftahul Hikmah*" +
        "\n\n" +

        "👧 *DATA CALON SISWA*" +
        "\n" +

        "Nama Anak: " +
        data.namaAnak +
        "\n" +

        "Nama Orang Tua: " +
        data.namaOrangTua +
        "\n" +

        "Tanggal Lahir: " +
        data.tanggalLahir +
        "\n" +

        "Kelas: " +
        data.kelas +
        "\n" +

        "No. WhatsApp: " +
        data.whatsapp +
        "\n" +

        "Alamat: " +
        data.alamat +
        "\n\n" +

        "💰 *DATA PEMBAYARAN*" +
        "\n" +

        "Metode: " +
        data.metodePembayaran +
        "\n";


    /* =================================================
       TRANSFER
    ================================================= */

    if (
        data.metodePembayaran ===
        "Transfer"
    ) {

        pesan +=

            "Nominal: Rp " +
            data.nominalPembayaran +
            "\n" +

            "\n📸 *BUKTI TRANSFER*" +
            "\n" +

            (
                data.buktiTransferURL ||
                "Link bukti tidak tersedia"
            ) +
            "\n";

    }


    /* =================================================
       CASH
    ================================================= */

    if (
        data.metodePembayaran ===
        "Cash"
    ) {

        /*
           Untuk Cash TIDAK ADA nominal.
        */

        pesan +=

            "\n💵 Pembayaran dilakukan secara CASH." +
            "\n";

    }


    /* =================================================
       PENUTUP
    ================================================= */

    pesan +=

        "\n━━━━━━━━━━━━━━━━━━" +
        "\n" +

        "Mohon konfirmasi pendaftaran calon siswa." +
        "\n\n" +

        "Terima kasih 🙏";


    return pesan;

}


/* =====================================================
   BUKA WHATSAPP
===================================================== */

function kirimWhatsApp(
    pesan
) {

    const url =
        "https://wa.me/" +
        NOMOR_WHATSAPP_SEKOLAH +
        "?text=" +
        encodeURIComponent(
            pesan
        );


    console.log(
        "📱 Membuka WhatsApp..."
    );


    window.open(
        url,
        "_blank"
    );

}


/* =====================================================
   SUBMIT FORM
===================================================== */

if (form) {

    form.addEventListener(
        "submit",
        async function (event) {

            event.preventDefault();


            /* =========================================
               PASTIKAN ATURAN PEMBAYARAN TERBARU
            ========================================= */

            updateMetodePembayaran();


            /* =========================================
               AMBIL DATA SISWA
            ========================================= */

            const namaAnakElement =
                document.getElementById(
                    "namaAnak"
                );


            const namaOrangTuaElement =
                document.getElementById(
                    "namaOrangTua"
                );


            const tanggalLahirElement =
                document.getElementById(
                    "tanggalLahir"
                );


            const kelasElement =
                document.getElementById(
                    "kelas"
                );


            const whatsappElement =
                document.getElementById(
                    "whatsapp"
                );


            const alamatElement =
                document.getElementById(
                    "alamat"
                );


            const namaAnak =
                namaAnakElement
                    ? namaAnakElement.value.trim()
                    : "";


            const namaOrangTua =
                namaOrangTuaElement
                    ? namaOrangTuaElement.value.trim()
                    : "";


            const tanggalLahir =
                tanggalLahirElement
                    ? tanggalLahirElement.value
                    : "";


            const kelas =
                kelasElement
                    ? kelasElement.value
                    : "";


            const whatsapp =
                whatsappElement
                    ? whatsappElement.value.trim()
                    : "";


            const alamat =
                alamatElement
                    ? alamatElement.value.trim()
                    : "";


            /* =========================================
               DATA PEMBAYARAN
            ========================================= */

            const metode =
                metodePembayaran
                    ? metodePembayaran.value
                    : "";


            const nominal =
                nominalPembayaran
                    ? nominalPembayaran.value
                    : "";


            const file =
                buktiTransfer
                    ? buktiTransfer.files[0]
                    : null;


            /* =========================================
               VALIDASI DATA SISWA
            ========================================= */

            if (
                !namaAnak ||
                !namaOrangTua ||
                !tanggalLahir ||
                !kelas ||
                !whatsapp ||
                !alamat
            ) {

                alert(
                    "⚠️ Mohon lengkapi semua data calon siswa."
                );

                return;

            }


            /* =========================================
               VALIDASI METODE
            ========================================= */

            if (!metode) {

                alert(
                    "💰 Silakan pilih metode pembayaran."
                );

                return;

            }


            /* =========================================
               NOMINAL
               
               TRANSFER = WAJIB
               CASH = TIDAK WAJIB
            ========================================= */

            let nominalNumber =
                0;


            if (
                metode === "Transfer"
            ) {

                if (!nominal) {

                    alert(
                        "💵 Silakan masukkan nominal pembayaran."
                    );

                    return;

                }


                nominalNumber =
                    Number(
                        nominal
                    );


                if (
                    !Number.isFinite(
                        nominalNumber
                    ) ||
                    nominalNumber <= 0
                ) {

                    alert(
                        "💵 Nominal pembayaran tidak valid."
                    );

                    return;

                }

            }


            /*
               Cash selalu nominal = 0
            */

            if (
                metode === "Cash"
            ) {

                nominalNumber =
                    0;

            }


            /* =========================================
               VALIDASI BUKTI TRANSFER
            ========================================= */

            if (
                metode === "Transfer" &&
                !file
            ) {

                alert(
                    "📸 Silakan upload bukti transfer."
                );

                return;

            }


            /* =========================================
               VALIDASI FILE
            ========================================= */

            if (file) {

                if (
                    !file.type.startsWith(
                        "image/"
                    )
                ) {

                    alert(
                        "❌ Bukti transfer harus berupa gambar."
                    );

                    return;

                }


                if (
                    file.size >
                    5 * 1024 * 1024
                ) {

                    alert(
                        "❌ Ukuran bukti transfer maksimal 5 MB."
                    );

                    return;

                }

            }


            /* =========================================
               SIMPAN TEKS BUTTON
            ========================================= */

            const teksAwal =
                submitButton
                    ? submitButton.textContent
                    : "🚀 DAFTAR SEKARANG";


            /* =========================================
               LOADING
            ========================================= */

            if (submitButton) {

                submitButton.disabled =
                    true;

                submitButton.textContent =
                    "⏳ Memproses...";

            }


            try {

                /* =====================================
                   UPLOAD BUKTI TRANSFER
                ===================================== */

                let buktiTransferURL =
                    "";


                if (
                    metode === "Transfer" &&
                    file
                ) {

                    if (submitButton) {

                        submitButton.textContent =
                            "📸 Upload bukti...";

                    }


                    buktiTransferURL =
                        await uploadBuktiTransfer(
                            file,
                            namaAnak
                        );

                }


                /* =====================================
                   SIMPAN KE SUPABASE
                ===================================== */

                if (submitButton) {

                    submitButton.textContent =
                        "💾 Menyimpan data...";

                }


                const {
                    error
                } =
                    await supabaseClient
                        .from("pendaftar")
                        .insert([
                            {

                                nama_anak:
                                    namaAnak,

                                nama_orang_tua:
                                    namaOrangTua,

                                tanggal_lahir:
                                    tanggalLahir,

                                kelas:
                                    kelas,

                                whatsapp:
                                    whatsapp,

                                alamat:
                                    alamat,

                                status:
                                    "Baru",

                                metode_pembayaran:
                                    metode,

                                nominal_pembayaran:
                                    nominalNumber,

                                bukti_transfer_url:
                                    buktiTransferURL ||
                                    null

                            }
                        ]);


                /* =====================================
                   CEK DATABASE
                ===================================== */

                if (error) {

                    console.error(
                        "❌ Supabase error:",
                        error
                    );

                    throw new Error(
                        error.message
                    );

                }


                console.log(
                    "✅ Data berhasil disimpan ke Supabase."
                );


                /* =====================================
                   DATA WHATSAPP
                ===================================== */

                const dataWhatsApp = {

                    namaAnak:
                        namaAnak,

                    namaOrangTua:
                        namaOrangTua,

                    tanggalLahir:
                        formatTanggal(
                            tanggalLahir
                        ),

                    kelas:
                        kelas,

                    whatsapp:
                        whatsapp,

                    alamat:
                        alamat,

                    metodePembayaran:
                        metode,

                    /*
                       Kalau Transfer → nominal.
                       Kalau Cash → kosong.
                    */

                    nominalPembayaran:
                        metode === "Transfer"
                            ? formatRupiah(
                                nominalNumber
                            )
                            : "",

                    buktiTransferURL:
                        buktiTransferURL

                };


                /* =====================================
                   BUAT PESAN
                ===================================== */

                const pesan =
                    buatPesanWhatsApp(
                        dataWhatsApp
                    );


                console.log(
                    "📱 Pesan WhatsApp:",
                    pesan
                );


                /* =====================================
                   RESET FORM
                ===================================== */

                form.reset();


                /*
                   Kembalikan aturan pembayaran
                   sesuai pilihan default HTML.
                */

                updateMetodePembayaran();


                /*
                   Reset preview
                */

                if (buktiTransferPreview) {

                    buktiTransferPreview.style.display =
                        "none";

                }


                if (buktiTransferPreviewImg) {

                    buktiTransferPreviewImg.src =
                        "";

                }


                /* =====================================
                   POPUP SUKSES
                ===================================== */

                if (popup) {

                    popup.classList.add(
                        "show"
                    );

                }


                /* =====================================
                   BUKA WHATSAPP
                ===================================== */

                kirimWhatsApp(
                    pesan
                );


                console.log(
                    "🎉 Pendaftaran berhasil."
                );

            } catch (error) {

                console.error(
                    "❌ Pendaftaran gagal:",
                    error
                );


                alert(

                    "❌ Pendaftaran gagal.\n\n" +
                    (
                        error.message ||
                        "Terjadi kesalahan."
                    )

                );

            } finally {

                if (submitButton) {

                    submitButton.disabled =
                        false;

                    submitButton.textContent =
                        teksAwal;

                }

            }

        }
    );

}


/* =====================================================
   TUTUP POPUP
===================================================== */

function tutupPopup() {

    if (popup) {

        popup.classList.remove(
            "show"
        );

    }

}


/* =====================================================
   KLIK DI LUAR POPUP
===================================================== */

if (popup) {

    popup.addEventListener(
        "click",
        function (event) {

            if (
                event.target === popup
            ) {

                tutupPopup();

            }

        }
    );

}


/* =====================================================
   TOMBOL ESC
===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            tutupPopup();

        }

    }
);