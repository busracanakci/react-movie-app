import { Tabs, Button } from 'antd';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: `Açıklama`,
    children: `Gişe rekortmeni Avatar'ın 13 yıl sonra gelen devam filmi Avatar: The Way of Water, Pandora gezegeninde Na'vi halkına dahil olup Neytiri ile bir aile kuran Jake Sully'nin, tanıdık bir düşmanın yeniden gezegenlerine tehdit oluşturması sonrası Na'vi halkıyla birlikte verdiği mücadeleyi konu ediniyor.

    Avatar'ın 10 yıl sonrasında geçen film, artık birer ebeveyn olan Jake ve Neytiri, öngörülemeyen olaylar onları evlerinden uzaklaştırınca Pandora uydusunun uçsuz bucaksız bölgelerine seyahat eder ve nihayetinde çevrelerindeki okyanuslarla uyum içinde yaşayan Metkayina klanının topraklarına kaçarlar. Sully'ler burada hem tehlikeli su dünyasının hem de yeni topluluklarının kabulünü kazanmanın getirdiği rahatsız edici koşullarda yollarını bulmayı öğrenmek zorundadır.
    `,
  },
  {
    key: '2',
    label: `Filmin Kadrosu`,
    children: `Yönetmen:James Cameron, Oyuncular:Sigourney Weaver, Zoe Saldana, Sam Worthington `,
  },
 
];

const Film3 = () =>  <div>
    <img  src={process.env.PUBLIC_URL + '/images/film1.jpg'} />  
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    <Button type="primary">Bilet Al</Button> 
    </div>
export default Film3;