# Next.js 15 Portfolio

Modern ve kişiselleştirilebilir bir portfolio web sitesi. Next.js 15, TypeScript ve Tailwind CSS kullanılarak geliştirilmiştir.

## 🚀 Özellikler

- ⚡️ Next.js 15 ile hızlı sayfa yüklemeleri
- 🎨 Tailwind CSS ile modern ve responsive tasarım
- 🌍 Çoklu dil desteği (i18n)
- 📱 Tüm cihazlarda uyumlu tasarım
- 🌙 Koyu/Açık tema desteği
- 🔍 SEO optimizasyonu

## 🛠️ Teknolojiler

- [Next.js 15](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

## 🚀 Kurulum

1. Projeyi klonlayın:

```bash
bash
git clone https://github.com/yusufalperendumlu/next15-portfolio.git
```

2. Proje dizinine gidin:

```bash
cd next15-portfolio
```

3. Gerekli paketleri yükleyin:

```bash
npm install
```

veya

```bash
yarn
```

4. Projeyi başlatın:

```bash
npm run dev
```

veya

```bash
yarn dev
```

5. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## 🌍 Çoklu Dil Desteği

Proje Türkçe ve İngilizce dillerini desteklemektedir. Dil dosyaları `src/i18n/locales` dizininde bulunmaktadır.

### Yeni Dil Ekleme

1. `src/i18n/locales` dizinine yeni dil dosyası ekleyin (örn: `fr.json`)
2. `src/utils/translate.ts` dosyasında translations objesine yeni dili ekleyin
3. `src/hooks/useLanguage.ts` dosyasında availableLocales dizisine yeni dili ekleyin

## 🎨 Özelleştirme

### Tema Renkleri

Tema renklerini `tailwind.config.ts` dosyasından özelleştirebilirsiniz:

```bash
typescript
theme: {
extend: {
colors: {
primary: {...},
secondary: {...}
}
}
}
```

### İçerik

Kişisel bilgilerinizi ve projelerinizi `src/data` dizinindeki dosyalardan güncelleyebilirsiniz.

## 📁 Proje Yapısı

```
├── public/ # Statik dosyalar
├── src/
│ ├── app/ # Sayfa bileşenleri
│ ├── components/ # Yeniden kullanılabilir bileşenler
│ ├── hooks/ # Custom React hooks
│ ├── i18n/ # Dil dosyaları
│ ├── styles/ # Global stiller
│ └── utils/ # Yardımcı fonksiyonlar
├── next.config.ts # Next.js konfigürasyonu
└── tailwind.config.ts # Tailwind CSS konfigürasyonu
```

## 🚀 Dağıtım

Projeyi production ortamına derlemek için:

```bash
npm run build
```

veya

```bash
yarn build
```

## 🤝 Katkıda Bulunma

1. Projeyi fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 📧 İletişim

Yusuf Alperen Dumlu - [LinkedIn](https://www.linkedin.com/in/yusufalperendumlu/)

Proje Linki: [https://github.com/yusufalperendumlu/next15-portfolio](https://github.com/yusufalperendumlu/next15-portfolio)

Bu README dosyası:
- Projenin genel özelliklerini
- Kurulum adımlarını
- Çoklu dil desteği kullanımını
- Özelleştirme seçeneklerini
- Proje yapısını
- Dağıtım bilgilerini
- Katkıda bulunma adımlarını
- İletişim bilgilerini içermektedir.
İsterseniz bu içeriği projenize göre özelleştirebilir veya genişletebilirsiniz.
