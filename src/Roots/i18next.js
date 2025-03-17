import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

i18next
  .use(initReactI18next) // react-i18next adapterini ulash
  .init({
    lng: 'uz', // standart til
    resources: {
      uz: {
        translation: {
          Home: "Bosh Sahifa",
          MyCourse: "Kurslarim",
          MyBlog: "Blog Sahifam", 
          MyContact: "Aloqaga chiq",
          Hello: "Salom",
          Iam: "Men",
          About1:"Dasturiy ta'minot ishlab chiqishda yangi g'oyalar yaratishga, innovatsion yechimlar topishga va texnologiyalardan maksimal foydalanishga ishtiyoqmand. Mening mutaxassisligim to'liq stack veb-ishlab chiqish, sun'iy intellekt, backend tizimlar va zamonaviy dasturlash tillarida (Java, Python, C#, JavaScript) keng.",
          About2:"Turli sohalarda tajriba orttirish va texnologiyalardagi yangiliklarga moslashish orqali men murakkab muammolarni tez va samarali hal qilishga qodirman. Spring Boot, React, va boshqa zamonaviy ramkalar bilan ishlashda, har doim yangi imkoniyatlar yaratishga intilaman. O'z bilimlarimni doimiy ravishda oshirish va texnologiya sanoatining etakchi innovatsiyalari bilan birga rivojlanishni maqsad qilganman.",
          //My Porject COmponentinin tarjimalari
          My:"Mening",
          MyProject:"Proyektlarim",
          WebShopping:"Webshopping.uz , foydalanuvchilar turli xil veb-elementlarni tayyor holda topishlari va o'z bizneslarining veb-saytlarini osongina tayyorlashlari mumkin bo'lgan onlayn xarid qilish platformasi. Ushbu loyihani ishlab chiqishda biz foydalanuvchilarga qulay va zamonaviy interfeysni taklif qilishni maqsad qildik.",
          DryFruit:"DryFruitExport.uz , React.it js, JavaScript va CSS yordamida ishlab chiqilgan zamonaviy veb-platforma. U foydalanuvchilarga qulay interfeysi va dinamik dizayni bilan yuqori sifatli quritilgan mevalar va yong'oqlarni eksport qilishni osonlashtirishga qaratilgan.",
          Hospital:"Ushbu loyiha shifoxona tayinlash tizimi bo'lib, ishlatiladigan texnologiyalar belanchak, Java, Bahor yuklash, Bahor ramkasi, Sql, Hibernate, JDBC, Maven texnologiyalaridan foydalanilgan. Ishlatilgan arxitektura safari 'qatlamli arxitektura'dir",
          WhoFaster:"Kim-Tezroq-bu Android Studio va Java yordamida ishlab chiqilgan refleksli va tezkor fikrlash o'yini. Foydalanuvchilarga imkon qadar tezroq to'g'ri javoblarni taqdim etishni maqsad qilgan ushbu interaktiv oyin muammosiz va foydalanuvchilar uchun qulay tajribani taqdim etadi.",
          WeStarted:"Westarted - bu tadbirkorlar va biznes uchun zamonaviy echimlarni taklif qiluvchi platforma. React.it js, JavaScript va Firebase yordamida ishlab chiqilgan va foydalanuvchilarga qulay interfeysi bilan raqamli loyihalaringizni boshqarish va rivojlantirishga yordam beradi.",
          ModaSari:"Moda-Sari - bu foydalanuvchilarga eng zamonaviy moda mahsulotlarini kashf qilish va xarid qilish imkonini beruvchi elektron tijorat platformasi. U Android Studio va Java yordamida ishlab chiqilgan va zamonaviy va foydalanuvchilarga qulay xarid qilish tajribasini taqdim etadi.",
          CarrierWeb:"CarrierAPI uchun foydalanuvchilar ish e’lonlarini boshqarish va kuzatishlari uchun frontend veb-sayti ham mavjud. JavaScript, React.js va Redux texnologiyalari asosida ishlab chiqilgan bo‘lib, qulay va interaktiv interfeysni ta’minlaydi. Foydalanuvchilar ish e’lonlarini yaratish, yangilash va kuzatish imkoniyatiga ega.",
          Carrier:"CarrierAPI – SQL ma’lumotlar bazasidan foydalangan holda foydalanuvchilar va ish jarayonlarini boshqarish va kuzatish uchun yaratilgan API. Foydalanuvchilar ish e’lonlarini yaratish, yangilash va kuzatish imkoniyatiga ega. Ishlatilgan texnologiyalar: Spring Boot, Hibernate, MS SQL, JWT va Spring Security.",
          TextContactME:"Aloqa qilishdan tortinmang! Sizga har qanday savol yoki so'rovda yordam berishdan mamnun bo'laman. Xabar qoldiring, men sizga imkon qadar tezroq qaytib kelaman.",
        }
      },
      tr: {
        translation: {
          Home: "Ana Sayfa",
          MyCourse: "Kurslarım",
          MyBlog: "Blog Sayfam",
          MyContact: "İletişime Geç",
          Hello: "Merhaba",
          Iam: "Ben",
          About1: "Yazılım geliştirmede yeni fikirler yaratmaya, yenilikçi çözümler bulmaya ve teknolojileri en verimli şekilde kullanmaya hevesliyim. Uzmanlık alanım tam yığın web geliştirme, yapay zeka, backend sistemleri ve modern programlama dillerinde (Java, Python, C#, JavaScript) geniştir.",
          About2: "Farklı alanlarda deneyim kazandım ve teknolojilerdeki yeniliklere uyum sağlayarak karmaşık problemleri hızlı ve verimli bir şekilde çözme yeteneğine sahibim. Spring Boot, React ve diğer modern çerçevelerle çalışarak her zaman yeni fırsatlar yaratmaya odaklanıyorum. Bilgilerimi sürekli olarak geliştiriyor ve teknoloji endüstrisinin lider yenilikleriyle birlikte büyümeyi hedefliyorum.",
          // My Project Componentinin Çevirileri
          My: "Benim",
          MyProject: "Projelerim",
          WebShopping: "Webshopping.uz, kullanıcıların çeşitli web öğelerini hazır halde bulabileceği ve kendi işlerinin web sitelerini kolayca oluşturabileceği bir çevrimiçi alışveriş platformudur. Bu projeyi geliştirirken kullanıcılara modern ve kullanıcı dostu bir arayüz sunmayı amaçladık.",
          DryFruit: "DryFruitExport.uz, React.it js, JavaScript ve CSS kullanılarak geliştirilmiş modern bir web platformudur. Kullanıcılara rahat bir arayüz ve dinamik tasarımı ile yüksek kaliteli kuru meyve ve kuruyemişlerin ihracatını kolaylaştırmaya odaklanmıştır.",
          Hospital: "Bu proje, hastane randevu sistemi olup, kullanılan teknolojiler arasında Spring, Java, Spring Boot, SQL, Hibernate, JDBC, Maven yer almaktadır. Kullanılan mimari ise 'katmanlı mimari'dir.",
          WhoFaster: "Who-Faster, Android Studio ve Java kullanılarak geliştirilen refleks ve hızlı düşünme oyunudur. Kullanıcılara en hızlı şekilde doğru yanıtları sunmayı amaçlayan bu etkileşimli oyun, kullanıcılar için sorunsuz ve rahat bir deneyim sunmaktadır.",
          WeStarted: "WeStarted, girişimciler ve işletmeler için modern çözümler sunan bir platformdur. React.it js, JavaScript ve Firebase kullanılarak geliştirilmiştir ve kullanıcı dostu arayüzüyle dijital projelerinizi yönetmenize ve geliştirmenize yardımcı olur.",
          Carrier:"CarrierAPI, SQL veritabanı kullanarak kullanıcı ve iş süreçlerini yönetmek ve takip etmek için geliştirilmiş bir API’dir. Kullanıcılar iş ilanlarını oluşturabilir, güncelleyebilir ve takip edebilir. Kullanılan teknolojiler: Spring Boot, Hibernate, MS SQL, JWT ve Spring Security.",
          CarrierWeb:"CarrierAPI’nin, iş ilanlarını yönetmek ve takip etmek için geliştirilen bir frontend web sitesi de bulunmaktadır. JavaScript, React.js ve Redux kullanılarak oluşturulan bu platform, kullanıcı dostu ve duyarlı bir arayüz sunar. Kullanıcılar iş ilanlarını oluşturabilir, güncelleyebilir ve takip edebilir.",
          ModaSari: "Moda-Sari, kullanıcıların en yeni moda ürünlerini keşfetmelerine ve satın almalarına olanak tanıyan bir e-ticaret platformudur. Android Studio ve Java kullanılarak geliştirilmiştir ve modern ve kullanıcı dostu bir alışveriş deneyimi sunmaktadır.",
          TextContactME: "İletişime geçmekten çekinmeyin! Herhangi bir soru veya talepte size yardımcı olmaktan memnuniyet duyarım. Bir mesaj bırakın, size en kısa sürede geri dönüş yapacağım.",
        }
      },
      en: {
        translation: {
          Home: "Home",
          MyCourse: "My Courses",
          MyBlog: "My Blog",
          MyContact: "Contact Me",
          Hello: "Hello",
          Iam: "I am",
          About1: "I am passionate about creating new ideas in software development, finding innovative solutions, and making the most of technologies. My expertise spans full-stack web development, artificial intelligence, backend systems, and modern programming languages (Java, Python, C#, JavaScript).",
          About2: "Through gaining experience in various fields and adapting to technological innovations, I am capable of solving complex problems quickly and efficiently. Working with Spring Boot, React, and other modern frameworks, I always strive to create new opportunities. I aim to continuously improve my knowledge and grow alongside the leading innovations in the technology industry.",
          // My Project Component Translations
          My: "My",
          MyProject: "My Projects",
          WebShopping: "Webshopping.uz, an online shopping platform where users can find various ready-made web elements and easily create their business websites. In developing this project, we aimed to offer users a modern and user-friendly interface.",
          DryFruit: "DryFruitExport.uz, a modern web platform developed using React.it js, JavaScript, and CSS. It focuses on making it easier to export high-quality dried fruits and nuts with its user-friendly interface and dynamic design.",
          Hospital: "This project is a hospital appointment system where technologies like Spring, Java, Spring Boot, SQL, Hibernate, JDBC, and Maven are used. The architecture used is a 'layered architecture.'",
          WhoFaster: "Who-Faster is a reflex and quick-thinking game developed using Android Studio and Java. This interactive game aims to present users with correct answers as quickly as possible, providing a seamless and enjoyable experience for users.",
          WeStarted: "WeStarted is a platform offering modern solutions for entrepreneurs and businesses. Developed using React.it js, JavaScript, and Firebase, it helps users manage and grow their digital projects with its user-friendly interface.",
          CarrierWeb:"CarrierAPI also has a frontend web application developed for managing and tracking job postings and applications. Built using JavaScript, React.js, and Redux, it provides an intuitive and responsive user interface. Users can create, update, and monitor job listings seamlessly, ensuring efficient job management.",
          Carrier:"CarrierAPI is an API designed to manage and track user and job operations using an SQL database. It allows users to create, update, and monitor job postings and applications. Technologies used: Spring Boot, Hibernate, MS SQL, JWT, and Spring Security.",
          ModaSari: "Moda-Sari is an e-commerce platform that allows users to discover and purchase the latest fashion products. Developed using Android Studio and Java, it offers a modern and user-friendly shopping experience.",
          TextContactME: "Don't hesitate to contact me! I will be happy to assist you with any questions or requests. Leave a message, and I will get back to you as soon as possible.",
        }
      }
      
      
    },
    fallbackLng: 'en', // agar tarjima topilmasa, ingliz tiliga qaytish
    interpolation: {
      escapeValue: false, // React-ning xavfsizligi uchun
    },
  });

export default i18next;
