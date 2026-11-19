
const estilos = [
    'Jornalística',
    'Artística',
    'Documental',
    'Publicitária',
    'Natureza',
    'Eventos',
    'Esportiva',
    'Retrato',
    'Fotografia como Hobby'
];

const descricoesEstilos = {
    'Jornalística': 'Registra e comunica fatos de interesse público. Busca informar com clareza, contexto e respeito às pessoas fotografadas.',
    'Artística': 'Usa a imagem como forma de expressão. Composição, luz, cores e enquadramento ajudam o fotógrafo a transmitir ideias, sensações ou interpretações pessoais.',
    'Documental': 'Acompanha pessoas, lugares e acontecimentos reais para construir um registro visual de uma história, de uma comunidade ou de um tema ao longo do tempo.',
    'Publicitária': 'Apresenta produtos, serviços ou marcas com uma intenção de comunicação. A imagem é planejada para chamar atenção e apoiar uma campanha ou mensagem.',
    'Natureza': 'Mostra paisagens, animais, plantas e fenômenos naturais. Além da beleza, pode despertar curiosidade e atenção para os ambientes e seres retratados.',
    'Eventos': 'Registra os momentos, as pessoas e a atmosfera de festas, cerimônias, apresentações e outros encontros, combinando cenas espontâneas e imagens planejadas.',
    'Esportiva': 'Captura atletas, movimentos e momentos decisivos de uma atividade esportiva. Exige atenção ao ritmo, à ação e ao instante do registro.',
    'Retrato': 'Tem uma pessoa como foco e procura mostrar sua expressão, personalidade ou presença. Pose, iluminação, enquadramento e ambiente ajudam a construir a imagem.',
    'Fotografia como Hobby': 'Reúne fotografias feitas por interesse pessoal e vontade de experimentar. É uma forma de praticar, observar o cotidiano e desenvolver um olhar próprio.'
};

const fotografiasUrls = {
    'Jornalística': [
        'https://www.jornalcidade.net/wp-content/uploads/2026/05/Luciano-Filho-e-pianista-arranjador-e-regente-da-Orquestra-Filarmonica-de-Rio-Claro.jpg.webp',
        'https://www.jornalcidade.net/wp-content/uploads/2026/10/Pepeu-e-Pantera.webp',
        'https://www.jornalcidade.net/wp-content/uploads/2016/05/Jacarand%C3%A1.jpg',
        'https://www.jornalcidade.net/wp-content/uploads/2026/10/Coelho.webp',
    ],

    'Artística': [
        'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Fishermen_at_work_by_Shagil_Kannur.jpg/960px-Fishermen_at_work_by_Shagil_Kannur.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/f/ff/Sunrise_In_Iceland_Fine_Art_Photography_%28133929339%29.jpeg',
        'https://upload.wikimedia.org/wikipedia/commons/2/21/Adams_The_Tetons_and_the_Snake_River.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/3/3a/Grasslands_of_the_American_Midwest.jpg',
    ],

    'Documental': [
        '../assets/images/usp.jpg',
        '../assets/images/cemiterio.jpg',
        '../assets/images/aterro.jpg',
        '../assets/images/torreusp.jpeg',
    ],

    'Publicitária': [
        'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f045c8144495891.628d63b868418.jpg',
        'https://pro2-bar-s3-cdn-cf6.myportfolio.com/7bacd200c6c339f54581421287677503/7080cb7d-d691-4b0d-b4a0-e6edd933f87a_rw_1920.jpg?h=c900d49c691336ed576faa2c5e83b9a9',
        'https://www.tbwaconcept.com/news/hilton_news_forthestay.jpg',
        'https://i.pinimg.com/originals/7a/dd/bb/7addbb7903df955706da2bee3f2dc699.jpg',
        'https://d3q27bh1u24u2o.cloudfront.net/wysiwyg/news/2025-10/6_WMH_OOH_1.F6rWAMOi.jpg',
        'https://images.squarespace-cdn.com/content/v1/661992b402d9304fa1b7df58/751e4103-3c6b-447a-a11b-2bc40c4bea9b/Billboard_Mockup_1.png',
        'https://images.squarespace-cdn.com/content/v1/65a00d0364f3fc70f7724105/5cb6d6b2-fd19-4d6d-a166-94f640380036/Brave_Lego_CaseStudy_Mockup_01_2816.jpg',
        'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/d29845115375449.604d3b84be596.jpg',
        'https://cdn.myportfolio.com/9e2301f1-181e-4771-8454-d701e04fc9d9/f1c55a08-a167-40e9-9339-d958cdedc0e2_rw_1200.jpg?h=5aecade5a805d3a7a97e4a1e6fa53d56',
        'https://mir-s3-cdn-cf.behance.net/project_modules/1400/8b3323220888301.67cad4967e09d.jpg',
    ],

    'Natureza': [
        '../assets/images/butantan.jpg',
        '../assets/images/a1.jpeg',
        '../assets/images/a2.jpeg',
        '../assets/images/a3.jpeg',
        '../assets/images/a4.jpeg',
        '../assets/images/a5.jpeg',
        '../assets/images/a6.jpeg',
        '../assets/images/a7.jpg',
        '../assets/images/a8.jpg',
        '../assets/images/a9.jpeg',
        'https://images.unsplash.com/photo-1750001175935-3f1fe6d29a99',
        'https://images.unsplash.com/photo-1659360921820-39572d3af390',
        'https://images.unsplash.com/photo-1650521407852-710f4a02f1a0',
        'https://images.unsplash.com/photo-1512882549909-02d06bf80585',
        'https://images.unsplash.com/photo-1701782638049-83bf684beedf',
        'https://images.unsplash.com/photo-1674973531560-c974e79ac477',
        'https://images.unsplash.com/photo-1685625764210-1a1e764768f6',
        'https://images.unsplash.com/photo-1664735867844-e9d8699b8533',
        'https://images.unsplash.com/photo-1755604710191-bd598698ebae',
        'https://images.unsplash.com/photo-1603477849227-705c424d1d80',
    ],

    'Eventos': [
        'https://s3.eu-west-1.amazonaws.com/extasy-resources-prod/event/4064248/TH_MD_b72805e1-bf16-4fe9-bb50-2cfa2706826c.jpeg',
        'https://cdn0.weddingwire.com/vendor/722880/3_2/960/jpg/elizabethjohnsneaks-257_51_88227-176118604914373.jpeg',
        'https://viajeibonito.com.br/wp-content/uploads/2025/01/carnaval-sao-luiz-do-paraitinga.jpg',
        'https://www.volume.at/cdn/gallery/09-timmy-trumpet-frequency-festival-green-park-st-poelten-20-08-2022-489__original.jpg',
        'https://uxbri.org/2018/images/photos/30373085214_409842cc54_o%401x-50.jpg',
        'https://blog.dvloper.io/content/images/2024/08/f3f91d92-83c7-4df9-9cac-2ad63550a280.jpg',
        'https://uploaded.kcampus.kr/3_6afdda2e88.jpg',
        'https://assets.noviams.com/novi-file-uploads/aago/RTW_3347__1_.jpg',
        'https://www.mf.vu.lt/images/53236541744_21fdf91a8f_k.jpg',
        'https://i0.wp.com/peopleasia.ph/wp-content/uploads/2025/02/474466476_1300136684427222_3668672020157693414_n-scaled.jpg?ssl=1',
        'https://cdn.prod.website-files.com/648808f301c7affa85e51914/6a545b3642dca62f4575477c_BTV_DAY04_WED31_NYE-AshleaCaygill-1%20%281%29.jpg',
        'https://www.thedroptimes.com/sites/thedroptimes.com/files/styles/facebook/public/2022-11/48987531852_eddc057ccf_b.jpg?h=199d8c1f&itok=wFFHT8Q9',
        'https://fls-9e6352f6-a882-497e-8399-5ac3c14caf13.laravel.cloud/attachments/pTecHqjQXy5MqU0dilH733kaaRiZ3EIiJ5ASUTsh.webp',
    ],

    'Esportiva': [
        '../assets/images/saymon/WhatsApp Image 2026-11-16 at 12.33.51.jpeg',
    '../assets/images/saymon/WhatsApp Image 2026-11-16 at 12.35.50.jpeg',
    '../assets/images/saymon/WhatsApp Image 2026-11-16 at 12.37.10.jpeg',
    '../assets/images/saymon/WhatsApp Image 2026-11-16 at 12.37.11.jpeg',
    '../assets/images/saymon/WhatsApp Image 2026-11-16 at 12.37.12.jpeg',
    '../assets/images/saymon/WhatsApp Image 2026-11-16 at 12.37.17.jpeg',
    '../assets/images/saymon/WhatsApp Image 2026-11-16 at 12.37.18 (1).jpeg',
    '../assets/images/saymon/WhatsApp Image 2026-11-16 at 12.37.18.jpeg',
    '../assets/images/saymon/WhatsApp Image 2026-11-16 at 12.37.19 (1).jpeg',
    '../assets/images/saymon/WhatsApp Image 2026-11-16 at 12.37.19 (2).jpeg',
    '../assets/images/saymon/WhatsApp Image 2026-11-16 at 12.37.19 (3).jpeg',
    '../assets/images/saymon/WhatsApp Image 2026-11-16 at 12.37.19.jpeg',
    '../assets/images/saymon/WhatsApp Image 2026-11-16 at 12.37.20.jpeg',
    '../assets/images/saymon/WhatsApp Image 2026-11-16 at 12.37.24.jpeg',
    '../assets/images/saymon/WhatsApp Image 2026-11-16 at 12.37.25 (1).jpeg',
    '../assets/images/saymon/WhatsApp Image 2026-11-16 at 12.37.25 (2).jpeg',
    '../assets/images/saymon/WhatsApp Image 2026-11-16 at 12.37.25.jpeg',
    '../assets/images/saymon/WhatsApp Image 2026-11-16 at 12.37.26 (1).jpeg',
    '../assets/images/saymon/WhatsApp Image 2026-11-16 at 12.37.26 (2).jpeg',
    '../assets/images/saymon/WhatsApp Image 2026-11-16 at 12.37.26 (3).jpeg',
    '../assets/images/saymon/WhatsApp Image 2026-11-16 at 12.37.26.jpeg',
    '../assets/images/saymon/WhatsApp Image 2026-11-16 at 12.37.27 (1).jpeg',
    '../assets/images/saymon/WhatsApp Image 2026-11-16 at 12.37.27 (2).jpeg',
    '../assets/images/saymon/WhatsApp Image 2026-11-16 at 12.37.27.jpeg',
    '../assets/images/saymon/WhatsApp Image 2026-11-16 at 12.37.28 (1).jpeg',
    '../assets/images/saymon/WhatsApp Image 2026-11-16 at 12.37.28 (2).jpeg',
    '../assets/images/saymon/WhatsApp Image 2026-11-16 at 12.37.28.jpeg',
    '../assets/images/saymon/WhatsApp Image 2026-11-16 at 12.37.29.jpeg',
        '../assets/images/vivanaura.jpeg',
        '../assets/images/quadrabayeux.jpeg',
        'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=80',
        'https://blog.proteckthor.com/content/images/size/w2000/2025/01/pexels-aleksandar069-3684122.jpg',
        'https://assets.fiba.basketball/image/upload/v1759956756/logbkfeso9efn4dek29e.jpg',
        'https://tvf.org.tr/storage/55453/TVF_3728.jpg',
        'https://images.sidearmdev.com/convert?type=webp&url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fcreighton.sidearmsports.com%2Fimages%2F2026%2F2%2F20%2FCR107772.jpg',
        'https://virtus.sport/wp-content/uploads/2025/08/DSCF5247-scaled.jpg',
        'https://media.revistagq.com/photos/64257f8b06e7fbdc61eb234d/master/w_1600%2Cc_limit/How-to-train-for-a-marathon-hp-b.jpg',
        'https://www.photopoly.net/wp-content/uploads/20%283%29082010/28.jpg',
        'https://www.gymbc.org/media/14mpxlj2/gc240606-1099.jpg',
        'https://images.squarespace-cdn.com/content/v1/66292f46d516e90d8b456e92/e3e1f940-fe05-48bd-98bb-edfb097a2326/DSC09937.jpg?format=1000w',
        'https://cdn.prod.website-files.com/682214eb0279b953919f1b61/687a161dbaacf6bb41a98482_pexels-madbyte-67386.jpg',

        // 50 fotografias adicionais
        'https://s.hdnux.com/photos/01/55/32/10/28680730/3/rawImage.jpg',
        'https://cdn.mos.cms.futurecdn.net/qbF3QgyWwgXGLNnfcPK73N.jpg',
        'https://www.activesgcircle.gov.sg/hs-fs/hubfs/20251213_Swimming-AC-025.jpg?height=2667&name=20251213_Swimming-AC-025.jpg&width=4000',
        'https://www.radiopuntozero.it/wp-content/uploads/2022/09/WhatsApp-Image-2024-02-05-at-11.26.05-1500x1000.jpeg',
        'https://gym-style.com/jordanchiles/pics/21usc/13.jpg',
        'https://resources.prod.atpmedia.pulselive.com/photo-resources/2025/05/21/fc6627a8-35f0-4f99-9f80-9e4e557303e3/GettyImages-2215659235.jpg?height=1080&width=1920',
        'https://cdn.sports24.kz/20251114/39b31806a47df3c2ca4e7b85aa92a98a4d71952e0807a369e30251e4088ac7f2-1200-675.webp',
        'https://ergelt.mn/upload/images/m-8%281%29.jpg',
        'https://cdn.shopify.com/s/files/1/0688/7325/7256/files/golfers-hit-sweeping-golf-course-summer.jpg?v=1752214639',
        'https://featured.japan-forward.com/sportslook/wp-content/uploads/sites/6/2022/12/cropped-shohei-ono-1-1218-scaled-e1671194120253.jpg',
        'https://www.magentasport.de/images/editorial/Mataracan%202.0/Redaktion/DEL/Saison25-26/Thumbnails/VOD_ST19_Mannheim-Wolfsburg.png?time=1763368726602',
        'https://www.pickhandball.hu/_next/image?q=100&url=https%3A%2F%2Fstorage.app.pickhandball.hu%2Fmedia%2F27398%2FSE20250227_honlap_1.jpg%3Fw%3D750%26h%3D500&w=750',
        'https://img.mlbstatic.com/milb-images/image/upload/t_16x9/t_w2208/milb/ib0nprzwmn2uozyy12sy',
        'https://livesport-ott-images.ssl.cdn.cra.cz/r1200xfq60/175f6f1d-4fbf-45d7-8401-e1d503a9ea37.jpeg',
        'https://cdn.agroklub.com/upload/images/text/bodovanje-u-preponskom-jahanju.jpg',
        'https://i.daily.jp/general/2025/03/29/Images/d_18811400.jpg',
        'https://res.cloudinary.com/usopc-prod/image/upload/v1755433515/NGB%20Wrestling/Athlete%20Action/duke-lace-1.jpg',
        'https://www.sportovnilisty.cz/img/_antialias_bf42d597-48b1-40e7-b538-033c96735f54_2b6c610072625ff7c08c249c1a623037.jpg',
        'https://images.squarespace-cdn.com/content/55830fd9e4b0ec758c892f81/bb131c78-fca3-455b-9b70-f4b69b12856f/LT11_Talley_Brooke_Raboutou_Collection_LR_11-20-19-0221.jpg?content-type=image%2Fjpeg&format=1500w',
        'https://sharp.fivb.com/Legacy/GetImage?No=202289544&maxSize=1400',
        'https://resources.worldrugby-rims.pulselive.com/worldrugby/photo/2025/01/25/92228e2b-d458-448f-9381-ac979d8d9628/aho_250125_10061_58.jpg',
        'https://static.independent.co.uk/2025/03/27/16/World_Championships_Figure_Skating_19199.jpg?fit=crop&height=900&width=1200',
        'https://www.usskiandsnowboard.org/sites/default/files/images/athletes/hero-shots/2020-04/Johnny.jpg',
        'https://www.ycspl.co.uk/_webedit/cached-images/4732.jpg',
        'https://www.dpv-padel.de/eedsipsu/2025/06/MSfPC_250524_000206-1024x683.jpg',
        'https://cdn-s-www.ledauphine.com/images/6C1E0335-B67D-465E-833B-3750B4723092/NW_raw/l-australien-matthew-hauser-remporte-l-etape-allemande-du-wtcs-photo-dpa-markus-tischler-1752339109.jpg',
        'https://sail-la-vie.com/static/assets/images/events/sailing-regattas-in-greece-sail-la-vie-sailing-in-greece.jpg',
        'https://cloudfront-us-east-1.images.arcpublishing.com/deseretnews/YKJO5IXY4RCBHPKMAR2IUIZNHY.JPG',
        'https://www.canoeicf.com/sites/default/files/gallery/icf_junior_u23_canoe_sprint_world_championships_2017_pitesti_romania_037.jpg',
        'https://www.opovo.com.br/_midias/jpg/2023/12/09/img_9522-24556885.jpg',
        'https://ran.joyn.de/_next/image?q=75&url=https%3A%2F%2Fimg.joyn.de%2Flido%2Fimages%2F2026%2F09%2F17%2F0c616d12-d2b5-4558-ab0e-444ea8ee69a1.jpg%2Fprofile%3Aoriginal.webp%2F%257B%2522width%2522%253A5528%252C%2522rect%2522%253A%257B%2522x%2522%253A0%252C%2522y%2522%253A0%252C%2522width%2522%253A5528%252C%2522height%2522%253A3685%257D%257D&w=3840',
        'https://www.oelv.at/files/img/NEWS-2025/2025-Staats-Eisenstadt/Tag-2/2025-Staats-Eisenstadt-Szihn-Weit.jpg',
        'https://www.gedistatic.it/content/gnn/img/lastampa/2025/09/27/113743247-d350839d-1621-40d1-a104-2b406206900b.jpg',
        'https://nwzimg.wezhan.cn/contents/sitefiles2064/10320260/images/59119390.jpg',
        'https://cdn.mos.cms.futurecdn.net/kB7nGgHyiLafFToD3DspmG.jpg',
        'https://dimages2.gazzettaobjects.it/files/image_640_398/uploads/2025/09/07/68bd8814da6f5.jpeg',
        'https://jbpress.ismcdn.jp/mwimgs/a/3/1200mw/img_a3d5143d6a842d6d8005cecfad151a68729086.jpg',
        'https://cassette.sphdigital.com.sg/image/straitstimes/f82579aa89993a7191b29ea1b7c355d7dcf251802ce890808eed5cf88305c536',
        'https://www.fih.hockey/static-assets/waf-images/db/5f/a7/4-3/g74QO2X63A.jpg?v=5.29&w=420+420w',
        'https://ca-times.brightspotcdn.com/dims4/default/f95557c/2147483647/strip/true/crop/3134x3014%2B0%2B0/resize/1200x1154%21/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F18%2F8f%2Fd15056054b46a0c73805ede0e5c0%2Faddison.jpg',
        'https://www.marathon.tokyo/about/past/2025/news/detail/images/KYK02613_3.jpg',
        'https://images2.minutemediacdn.com/image/upload/c_fill%2Cw_1200%2Car_4%3A3%2Cf_auto%2Cq_auto%2Cg_auto/images/ImagnImages/mmsport/colorado_rockies_on_si/01khfr9wj3k6cc2m7zqz.jpg',
        'https://region-liaoning-resource.xuexi.cn/image/1006/process/fa3dffccecec47058a32aec9d46839d2.jpg',
        'https://medias.lequipe.fr/img-photo-jpg/lebrun-felix-fra-lebrun-alexis-fra/1500000002203639/0-1200-800-75/849ee.jpg',
        'https://s.yimg.com/ny/api/res/1.2/Pdm2Nz_M49IlwlwnRucALw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNztjZj13ZWJw/https%3A/media.zenfs.com/en/football_italia_articles_132/ac05855484d0446c0c64599ff9697726',
        'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/JYDKIZAJ3BHXVMKPQ6TSUOVPK4.jfif',
        'https://img.lemde.fr/2025/07/16/0/127/3528/2352/1440/960/60/0/e3d91e7_ftp-import-images-1-t7tn6t9xubtr-2025-07-16t204917z-627441669-up1el7g1lu3yx-rtrmadp-3-soccer-euro-nor-ita.JPG',
        'https://resize-image.vocus.cc/resize?norotation=true&quality=100&sign=VD8AVkqgQ1_X-ND1d2tAp6MZsv-edV4XOjx2bw4XAIU&url=https%3A%2F%2Fimages.vocus.cc%2Faaf2cebf-5697-4874-83ef-e22c2ff6ff55.jpg&width=1200',
        'https://s2-ge.glbimg.com/ppWp3XsRdk_R8xHin-BiINuGiP0%3D/0x0%3A799x533/984x0/smart/filters%3Astrip_icc%28%29/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2025/9/o/9KBqAASvGlU6CfPl0N7g/54334793424-1bf9f8a2e1-c.jpg',
        'https://s.hdnux.com/photos/01/55/25/74/28663559/3/rawImage.jpg',
        
    ],

    'Retrato': [
        'https://admin.hungermag.com/app/uploads/2019/08/29-see-naples-and-die-sam-gregg-napoli-photography-photographer-1560x1913.jpg',
        'https://images.squarespace-cdn.com/content/v1/615b40dad8b5a1549e24b6aa/d85ffefa-e795-47d2-b39e-470bf4214f7e/dominiquemisrahi6-9.jpg',
        'https://4.bp.blogspot.com/-DCiF4NfQu4E/Wh1nrB8h4gI/AAAAAAACcjg/qMCrva30yZc7Wc0WXwCtmJyvb__X7q0ZACLcBGAs/s1600/Tatsuo%2BSuzuki%2B033.jpg',
        'https://cdn.viewing.nyc/assets/media/02f226f43518bd70618ceb1dfc7da9b6/elements/29dbcf58b070c4e8a34ea0ea45036e6a/xl/875a8f12-36ef-4321-9964-49fd7c950f19_2x.jpg',
        'https://petapixel.com/assets/uploads/2024/07/23_S5134.jpg',
        'https://www.jaymaisel.com/cdn/shop/files/034_New_York_People_2157_c13b5669-8f0f-4650-b0e4-ff747fd5a3ac_1024x1024.jpg?v=1726592860',
        'https://i0.wp.com/erickimphotography.com/blog/wp-content/uploads/2016/04/R0000665-1-1325x2000.jpg?resize=1325%2C2000',
        'https://assets.st-note.com/production/uploads/images/233485316/073bab6bdd04dcce67484b496b94867e.png',
        'https://image.demorgen.be/243473115/feature-crop/1200/1200/alessandro-baricco',
        'https://static.wixstatic.com/media/6b9523_915c292357fa49f6b1a3863acee5d6d6~mv2.jpg/v1/fill/w_600%2Ch_600%2Cal_c%2Cq_80%2Cusm_0.66_1.00_0.01%2Cenc_auto/portrait.jpg',
        'https://uploads-ssl.webflow.com/5fa422d2ca05634d9576666f/5fcf6ecda65c41085c3678e7_Sandra-Kaczmarek.jpg',
        'https://c.superprof.com/i/m/41813223/500/20260728073611/41813223.jpg',
        'https://images.fastcompany.com/image/upload/f_webp%2Cq_auto%2Cc_fit/wp-cms-2/2026/06/1-2-ai-20.jpg',
        '../assets/images/retratos/retrato-01.png',
        '../assets/images/retratos/retrato-02.png',
        '../assets/images/retratos/retrato-03.png',
        '../assets/images/retratos/retrato-04.png',
        '../assets/images/retratos/retrato-05.png',
        '../assets/images/retratos/retrato-06.png',
        '../assets/images/retratos/retrato-07.png',
        '../assets/images/retratos/retrato-08.png',
        '../assets/images/retratos/retrato-09.png',
        '../assets/images/retratos/retrato-10.png',
    ],

    'Fotografia como Hobby': [
        '../assets/images/kelvinaura.jpg',
        '../assets/images/vivanpai.jpeg',
        '../assets/images/chrisbebe.jpeg',
        '../assets/images/marquesbebe.jpeg',
        '../assets/images/raphaelbutantan.jpg',
        '../assets/images/minion.jpg',
        '../assets/images/vivancrianca.jpeg',
        '../assets/images/targa.jpeg',
    ],
};

/* Exibe poucas fotografias por vez e carrega somente as próximas à tela. */
document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const container = document.getElementById('galeria-container');
    if (!container) return;

    const POR_LOTE = 12;
    const MAX_PARALELAS = 4;
    const MARGEM_IMAGENS = '420px 0px';
    const MARGEM_LOTES = '500px 0px';

    const nav = document.createElement('nav');
    nav.className = 'galeria-nav';
    nav.setAttribute('aria-label', 'Categorias de fotografias');
    const conteudo = document.createElement('div');
    conteudo.className = 'galeria-conteudo';
    container.append(nav, conteudo);

    let sessao = 0;
    let observadorImagens = null;
    let observadorLotes = null;
    let carregamentos = [];
    let ativos = 0;
    let proximoIndice = 0;

    function urlMiniatura(url) {
        try {
            const u = new URL(url, document.baseURI);
            if (u.hostname === 'images.unsplash.com') {
                u.searchParams.set('auto', 'format');
                u.searchParams.set('fit', 'crop');
                u.searchParams.set('w', '720');
                u.searchParams.set('q', '72');
            } else if (u.hostname === 'images.squarespace-cdn.com') {
                u.searchParams.set('format', '750w');
            } else if (u.hostname === 'res.cloudinary.com' && u.pathname.includes('/image/upload/')) {
                u.pathname = u.pathname.replace('/image/upload/', '/image/upload/f_auto,q_auto,w_720/');
            }
            return u.href;
        } catch {
            return url;
        }
    }

    function processarFila(token) {
        if (token !== sessao) return;
        while (ativos < MAX_PARALELAS && carregamentos.length) {
            const imagem = carregamentos.shift();
            if (!imagem?.isConnected) continue;
            ativos++;
            let encerrado = false;
            const finalizar = () => {
                if (encerrado) return;
                encerrado = true;
                imagem.removeEventListener('load', finalizar);
                imagem.removeEventListener('error', finalizar);
                clearTimeout(limite);
                if (token === sessao) {
                    ativos--;
                    processarFila(token);
                }
            };

            imagem.addEventListener('load', finalizar);
            imagem.addEventListener('error', finalizar);
            // Uma URL remota sem resposta não deve paralisar a fila inteira.
            const limite = setTimeout(finalizar, 18000);
            imagem.loading = 'eager'; // Já está perto da viewport: a fila controla a carga.
            imagem.src = imagem.dataset.src;
            window.LuminaMedia?.preparar(imagem);
            if (imagem.complete && imagem.naturalWidth) finalizar();
        }
    }

    function enfileirar(cartao, token) {
        if (token !== sessao || cartao.dataset.iniciado === 'true') return;
        cartao.dataset.iniciado = 'true';
        observadorImagens?.unobserve(cartao);
        const img = cartao.querySelector('img');
        if (!img) return;
        carregamentos.push(img);
        processarFila(token);
    }

    function cancelarAnterior() {
        sessao++;
        observadorImagens?.disconnect();
        observadorLotes?.disconnect();
        observadorImagens = null;
        observadorLotes = null;
        carregamentos = [];
        ativos = 0;
        // Retirar os elementos antigos faz o navegador cancelar downloads desnecessários.
        conteudo.replaceChildren();
    }

    function renderizar(estilo) {
        cancelarAnterior();
        const token = sessao;
        const urls = (fotografiasUrls[estilo] || []).filter(Boolean);
        proximoIndice = 0;

        const titulo = document.createElement('h2');
        titulo.textContent = estilo;
        const descricao = document.createElement('p');
        descricao.className = 'galeria-descricao';
        descricao.textContent = descricoesEstilos[estilo];
        descricao.setAttribute('aria-live', 'polite');
        const grade = document.createElement('div');
        grade.className = 'galeria-grid';
        const mais = document.createElement('button');
        mais.type = 'button';
        mais.className = 'galeria-carregar-mais';
        mais.textContent = 'Carregar mais fotografias';
        conteudo.append(titulo, descricao, grade, mais);

        observadorImagens = 'IntersectionObserver' in window
            ? new IntersectionObserver(entradas => {
                entradas.forEach(entrada => {
                    if (entrada.isIntersecting) enfileirar(entrada.target, token);
                });
            }, { rootMargin: MARGEM_IMAGENS })
            : null;

        function inserirLote() {
            if (token !== sessao) return;
            const fim = Math.min(proximoIndice + POR_LOTE, urls.length);
            const fragmento = document.createDocumentFragment();
            const novos = [];
            for (let i = proximoIndice; i < fim; i++) {
                const url = urls[i];
                const cartao = document.createElement('span');
                cartao.className = 'lumina-midia lumina-pendente';
                const img = document.createElement('img');
                img.alt = `Fotografia ${estilo}, imagem ${i + 1}`;
                img.width = 480;
                img.height = 600;
                img.decoding = 'async';
                img.loading = 'lazy';
                img.dataset.src = urlMiniatura(url);
                img.dataset.fullSrc = url;
                cartao.append(img);
                fragmento.append(cartao);
                novos.push(cartao);
            }
            proximoIndice = fim;
            grade.appendChild(fragmento);

            novos.forEach(cartao => {
                if (observadorImagens) observadorImagens.observe(cartao);
                else enfileirar(cartao, token);
            });
            mais.hidden = proximoIndice >= urls.length;
            if (mais.hidden) observadorLotes?.disconnect();
        }

        mais.addEventListener('click', inserirLote);
        inserirLote();

        if (!mais.hidden && 'IntersectionObserver' in window) {
            observadorLotes = new IntersectionObserver(entradas => {
                if (entradas.some(entrada => entrada.isIntersecting) && token === sessao) {
                    inserirLote();
                }
            }, { rootMargin: MARGEM_LOTES });
            observadorLotes.observe(mais);
        }
    }

    estilos.forEach(estilo => {
        const botao = document.createElement('button');
        botao.type = 'button';
        botao.className = 'galeria-btn';
        botao.textContent = estilo;
        botao.setAttribute('aria-pressed', 'false');
        botao.addEventListener('click', () => {
            if (botao.classList.contains('active')) return;
            nav.querySelectorAll('.galeria-btn').forEach(item => {
                const selecionado = item === botao;
                item.classList.toggle('active', selecionado);
                item.setAttribute('aria-pressed', String(selecionado));
            });
            renderizar(estilo);
        });
        nav.appendChild(botao);
    });

    const primeiro = nav.querySelector('.galeria-btn');
    if (primeiro) {
        primeiro.classList.add('active');
        primeiro.setAttribute('aria-pressed', 'true');
        renderizar(estilos[0]);
    }
});
