# 🚗 Araç Kataloğu

Modern bir arayüzle araç veritabanını filtreleyip keşfedebileceğiniz React ve TypeScript tabanlı bir web uygulaması.

## ✨ Özellikler

- Araçları marka, model ve yıla göre filtreleme
- Gerçek zamanlı arama sonuçları
- Otomatik tamamlamalı marka seçimi
- Sayfalama desteği
- Responsive tasarım
- URL tabanlı filtreler (bookmark & paylaşım desteği)
- Detaylı araç bilgisi görüntüleme

## 🛠️ Teknolojiler

- **Frontend Framework:** [React](https://reactjs.org/)
- **Programlama Dili:** [TypeScript](https://www.typescriptlang.org/)
- **Stil Kütüphanesi:** [Tailwind CSS](https://tailwindcss.com/)
- **Paketleyici:** [Vite](https://vitejs.dev/)
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **UI Bileşenleri:**
  - [React Select](https://react-select.com/) - Gelişmiş dropdown menüler
  - [React Paginate](https://www.npmjs.com/package/react-paginate) - Sayfalama bileşeni

## 🚀 Kurulum

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

```bash
# Repoyu klonlayın
git clone <repo-url>

# Proje dizinine gidin
cd car-rental

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev
```

Uygulama varsayılan olarak http://localhost:5173 adresinde çalışacaktır.

## 💡 Kullanım

1. Ana sayfadaki arama barını kullanarak araçları filtreleyebilirsiniz:

   - Marka seçin (dropdown menüden)
   - Model yazın (metin alanına)
   - Yıl seçin (sayı alanına)

2. Arama sonuçları filtrelere göre gerçek zamanlı olarak güncellenecektir

3. Sonuçlar arasında gezinmek için sayfalama kontrollerini kullanabilirsiniz

## 📚 API Kaynakları

- **Araç Verileri:**

  - [Open Data Soft API](https://public.opendatasoft.com/explore/dataset/all-vehicles-model/api/?sort=scharger)
  - Endpoint: `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records`

- **Araç Görselleri:**
  - [Imagin Studio API](https://docs.imagin.studio/guides/getting-images/embedding-in-your-website)
  - Örnek: `https://cdn.imagin.studio/getImage?customer=hrjavascript-mastery&make=BMW&modelFamily=m4`

## 🧠 Geliştirme Araçları

- **[Cursor AI](https://cursor.sh/)** - Yapay zeka destekli kod editörü
  - Otomatik kod tamamlama
  - Akıllı kod önerileri
  - Entegre AI chatbot desteği
  - Composer ile kod yazma

# Web Uygulaması Dağıtım (Deployment) Rehberi

## 📋 Genel Dağıtım Süreci

1. **Geliştirme Sürecinin Tamamlanması**

   - Kodun test edilmesi ve hataların giderilmesi
   - Production build'in oluşturulması ve yerel ortamda test edilmesi
   - Performance optimizasyonlarının tamamlanması

2. **Versiyon Kontrolü**

   - Projenin GitHub veya benzeri bir platforma yüklenmesi
   - Sürüm etiketlerinin (tag) oluşturulması

3. **Hosting Platformu Seçimi ve Yapılandırması**

   - Projenin gereksinimlerine göre uygun platformun belirlenmesi
   - Hesap oluşturma ve temel yapılandırmaların tamamlanması

4. **Deployment İşlemi**

   - CI/CD pipeline'ının kurulması (opsiyonel ama önerilen)
   - Uygulamanın hosting platformuna yüklenmesi ve dağıtılması

5. **Domain Yapılandırması**

   - Alan adı satın alınması veya var olan alan adının yapılandırılması
   - DNS ayarlarının yapılması ve SSL sertifikasının kurulumu

6. **Post-Deployment İşlemleri**
   - SEO optimizasyonlarının yapılması
   - Performans testleri ve iyileştirmeler
   - İzleme ve analitik araçlarının kurulumu

## 🚀 Hosting Platformları

### Modern Çözümler

Bu platformlar CI/CD entegrasyonu, CDN, SSL, otomatik dağıtım ve diğer modern özellikleri tek bir çözümde sunmaktadır.

| Platform                                                         | Özellikler                                                        | En İyi Olduğu Alan                             |
| ---------------------------------------------------------------- | ----------------------------------------------------------------- | ---------------------------------------------- |
| [Vercel](https://vercel.com/)                                    | Otomatik deployment, Ücretsiz SSL, Edge CDN, Serverless Functions | Next.js ve React projeleri                     |
| [Netlify](https://www.netlify.com/)                              | Kolay CI/CD, Form handling, Identity service, Functions           | JAMstack projeleri                             |
| [AWS Amplify](https://aws.amazon.com/amplify/)                   | Tam AWS entegrasyonu, CI/CD, Backend as a Service                 | Ölçeklenebilir ve karmaşık projeler            |
| [Azure Static Web Apps](https://azure.microsoft.com/)            | Azure Functions, GitHub Actions entegrasyonu                      | Microsoft ekosistemindeki projeler             |
| [Firebase Hosting](https://firebase.google.com/products/hosting) | Google CDN, Güvenli HTTPS, Statik ve dinamik içerik desteği       | Hızlı prototype ve küçük/orta ölçekli projeler |

### Geleneksel Çözümler

Bu platformlar daha fazla esneklik ve kontrol sağlar, ancak daha fazla yapılandırma gerektirir.

| Platform                                                                         | Özellikler                               | Kullanım Senaryosu            |
| -------------------------------------------------------------------------------- | ---------------------------------------- | ----------------------------- |
| [Digital Ocean App Platform](https://www.digitalocean.com/products/app-platform) | Managed service, Docker desteği          | Containerized uygulamalar     |
| [Heroku](https://www.heroku.com/)                                                | Kolay kullanım, Eklenti ekosistemi       | Hızlı geliştirme, prototipler |
| [Linode](https://www.linode.com/)                                                | Yüksek performans, Özelleştirilebilirlik | Maliyet-etkin VPS çözümleri   |
| [AWS EC2](https://aws.amazon.com/ec2/)                                           | Tam kontrol, Esneklik                    | Özel gereksinimli projeler    |
| [Google Compute Engine](https://cloud.google.com/compute)                        | Ölçeklenebilirlik, Güvenlik              | Büyük ölçekli uygulamalar     |

## 🌐 Domain Yönetimi

### Neden Özel Bir Domain Kullanmalısınız?

- **Profesyonellik**: Özel bir domain, markanızın veya projenizin ciddiyetini gösterir
- **Hatırlanabilirlik**: Kullanıcıların sitenizi kolayca hatırlamasını sağlar
- **SEO Avantajı**: Özel domainler arama motoru optimizasyonunda avantaj sağlar
- **Güven**: Kullanıcılar özel domainli sitelere daha fazla güven duyarlar

### Domain Sağlayıcıları

| Sağlayıcı                                                              | Güçlü Yönleri                                  | Fiyat Aralığı |
| ---------------------------------------------------------------------- | ---------------------------------------------- | ------------- |
| [Namecheap](https://www.namecheap.com/)                                | Rekabetçi fiyatlar, Ücretsiz WhoisGuard        | Düşük-Orta    |
| [Google Domains](https://domains.google/)                              | Kolay kullanım, Google servisleri entegrasyonu | Orta          |
| [GoDaddy](https://www.godaddy.com/)                                    | Kapsamlı hizmetler, 24/7 destek                | Orta-Yüksek   |
| [İsimTescil](https://www.isimtescil.net/)                              | Türkiye'de yerel destek                        | Değişken      |
| [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/) | Toptan fiyatlandırma, Gelişmiş güvenlik        | Düşük         |

### DNS Yapılandırması

DNS (Domain Name System), internet üzerindeki alan adlarını IP adreslerine çeviren sistemdir. Doğru DNS yapılandırması, web sitenizin erişilebilirliği için kritik öneme sahiptir.

#### Yaygın DNS Kayıt Türleri

| Kayıt Türü                 | Açıklama                                    | Kullanım Senaryosu                  |
| -------------------------- | ------------------------------------------- | ----------------------------------- |
| **A (Address)**            | Alan adını IPv4 adresine yönlendirir        | Web sunucusuna doğrudan yönlendirme |
| **AAAA**                   | Alan adını IPv6 adresine yönlendirir        | IPv6 destekli web sunucuları        |
| **CNAME (Canonical Name)** | Alan adını başka bir alan adına yönlendirir | Alt alan adları, CDN entegrasyonu   |
| **MX (Mail Exchange)**     | E-posta sunucusunu belirtir                 | E-posta hizmetleri                  |
| **TXT (Text)**             | Doğrulama ve bilgi amaçlı metin kaydı       | SPF, DKIM, domain doğrulama         |
| **NS (Name Server)**       | Alan adını yöneten ad sunucularını belirtir | DNS sağlayıcı değişikliği           |

## 🔍 SEO Optimizasyonu

Search Engine Optimization (SEO), web sitenizin arama motorlarında daha iyi sıralamalarda yer almasını sağlayan tekniklerin bütünüdür.

### Teknik SEO Optimizasyonları

#### Temel HTML Optimizasyonları

- **Title Etiketi**: Her sayfa için benzersiz, açıklayıcı ve 50-60 karakter uzunluğunda başlıklar kullanın
- **Meta Açıklamalar**: Her sayfa için 150-160 karakter uzunluğunda, özet niteliğindeki açıklamalar ekleyin
- **Başlık Etiketleri**: Doğru hiyerarşide H1, H2, H3 gibi başlık etiketleri kullanın (her sayfada yalnızca bir H1)
- **Görsel Optimizasyonu**:
  - Tüm `<img>` etiketlerine açıklayıcı `alt` ve `title` nitelikleri ekleyin
  - Görsel boyutlarını optimize edin (WebP veya AVIF gibi modern formatlar kullanın)
  - Görselleri lazy loading ile yükleyin

#### Yapısal Veri İşaretlemesi

- [Schema.org](https://schema.org/) yapısal veri işaretlemelerini kullanarak zengin sonuçların görüntülenmesini sağlayın
- Ürün, makale, yerel işletme gibi içerik türüne özel şemalar ekleyin

#### Teknik Dosyalar

- **sitemap.xml**: Arama motorlarının sitenizi daha etkili bir şekilde taramasını sağlar

  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://www.siteadi.com/</loc>
      <lastmod>2023-09-20</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
    </url>
  </urlset>
  ```

- **robots.txt**: Arama motorlarının hangi sayfaları tarayabileceğini, hangilerini tarayamayacağını belirler

  ```
  User-agent: *
  Disallow: /admin/
  Disallow: /temp/
  Allow: /

  Sitemap: https://www.siteadi.com/sitemap.xml
  ```

#### Sosyal Medya Entegrasyonu

- **Open Graph (Facebook) Etiketleri**:

  ```html
  <meta property="og:title" content="Sayfa Başlığı" />
  <meta property="og:description" content="Sayfa açıklaması" />
  <meta property="og:image" content="https://www.siteadi.com/resim.jpg" />
  <meta property="og:url" content="https://www.siteadi.com/sayfa" />
  <meta property="og:type" content="website" />
  ```

- **Twitter Card Etiketleri**:
  ```html
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Sayfa Başlığı" />
  <meta name="twitter:description" content="Sayfa açıklaması" />
  <meta name="twitter:image" content="https://www.siteadi.com/resim.jpg" />
  ```

## 📊 Performans Metrikleri ve İzleme

### Core Web Vitals

| Metrik                              | Açıklama                                       | İyi Değer    |
| ----------------------------------- | ---------------------------------------------- | ------------ |
| **LCP (Largest Contentful Paint)**  | Sayfadaki en büyük içeriğin yüklenme süresi    | < 2.5 saniye |
| **FID (First Input Delay)**         | Kullanıcının ilk etkileşimine kadar geçen süre | < 100 ms     |
| **CLS (Cumulative Layout Shift)**   | Görsel stabilitenin ölçümü                     | < 0.1        |
| **INP (Interaction to Next Paint)** | Etkileşimden sonraki ilk görüntüleme süresi    | < 200 ms     |
| **TBT (Total Blocking Time)**       | Ana iş parçacığının bloke edildiği toplam süre | < 200 ms     |
| **TTI (Time to Interactive)**       | Sayfanın etkileşimli hale gelme süresi         | < 3.8 saniye |

### Performans Ölçüm Araçları

- **[PageSpeed Insights](https://pagespeed.web.dev/)**: Google'ın performans ölçüm aracı
- **[Lighthouse](https://developers.google.com/web/tools/lighthouse)**: Performans, erişilebilirlik, SEO vb. denetimler
- **[WebPageTest](https://www.webpagetest.org/)**: Detaylı performans raporları ve karşılaştırmalar
- **[GTmetrix](https://gtmetrix.com/)**: Sayfa yükleme hızını ve optimizasyon önerilerini sunar

### İzleme ve Analitik

- **[Google Analytics](https://analytics.google.com/)**: Kullanıcı davranışları ve trafik kaynakları
- **[Hotjar](https://www.hotjar.com/)**: Kullanıcı davranış haritaları ve analizleri
- **[Sentry](https://sentry.io/)**: Gerçek zamanlı hata izleme ve raporlama
- **[UptimeRobot](https://uptimerobot.com/)**: Website kesinti izleme ve uyarılar

## 🔒 Güvenlik Önlemleri

- **SSL/TLS Sertifikası**: HTTPS kullanımı ile güvenli bağlantı sağlayın ([Let's Encrypt](https://letsencrypt.org/) ücretsiz sertifika sunar)
- **Content Security Policy (CSP)**: XSS saldırılarına karşı koruma sağlar
- **HTTP Strict Transport Security (HSTS)**: HTTPS kullanımını zorunlu kılar
- **Cross-Origin Resource Sharing (CORS)**: Güvenli cross-origin isteklerini yapılandırır
- **Rate Limiting**: DoS saldırılarına karşı koruma sağlar

---

Bu rehber, modern web uygulamalarının dağıtımı için temel bir çerçeve sunmaktadır. Projenizin özel gereksinimlerine ve karmaşıklığına bağlı olarak, ek adımlar veya değişiklikler gerekebilir.

## 📝 Lisans

Bu proje [MIT lisansı](LICENSE) altında lisanslanmıştır.
