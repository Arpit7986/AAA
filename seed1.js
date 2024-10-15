const Arrival = require("./models/Arrival");

const products=[
    {
        name:"CAMPUS NORTH PLUS",
        subname:"Walking and Workout Shoes | Stylish Knitted & Light Weight Running Shoes For Men",
        img1:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/m/u/l/-original-imahfxvbqaapgdzh.jpeg?q=70&crop=false",
        img2:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/j/i/f/-original-imagyg4ymypb4wfx.jpeg?q=70&crop=false",
        img3:"https://rukminim2.flixcart.com/image/832/832/k6wiefk0/shoe/k/x/g/5g-677-12-campus-blk-original-imafp8nuauzgzcmd.jpeg?q=70&crop=false",
        img4:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/x/v/7/-original-imagttg5mzgfmkrp.jpeg?q=70&crop=false",
        img5:"https://rukminim2.flixcart.com/image/832/832/kialrww0-0/shoe/f/m/u/11g-677-7-campus-blk-original-imafy4djavkqffjz.jpeg?q=70&crop=false",
        price:699,
        desc:"Amazing Product To Buy"
    },
    {
        name:"CAMPUS ARTEMIS Running",
        subname:"Walking and Workout Shoes | Stylish Knitted & Light Weight Running Shoes For Men",
        img1:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/h/t/9/-original-imah23c7u5aeryzr.jpeg?q=70&crop=false",
        img2:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/1/t/3/-original-imaghvb7hfzzyxhf.jpeg?q=70&crop=false",
        img3:"https://rukminim2.flixcart.com/image/832/832/kvba7bk0/shoe/h/q/c/9-6g-222-campus-ch-gry-grn-original-imag88mngkts7sqw.jpeg?q=70&crop=false",
        img4:"https://rukminim2.flixcart.com/image/832/832/kvba7bk0/shoe/i/d/c/9-6g-222-campus-ch-gry-grn-original-imag88mn9efzpwjz.jpeg?q=70&crop=false",
        img5:"https://rukminim2.flixcart.com/image/832/832/kvba7bk0/shoe/z/n/o/9-6g-222-campus-ch-gry-grn-original-imag88mneththzxh.jpeg?q=70&crop=false",
        price:1299,
        desc:"Amazing Product To Buy"
    },
    {
        name:"Abros JOGGER-2 Casuals",
        subname:"Walking and Workout Shoes | Stylish Knitted & Light Weight Running Shoes For Men",
        img1:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/r/z/g/-original-imah45fb8mxqjkvq.jpeg?q=70&crop=false",
        img2:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/j/o/r/8-ausg7008-olive-8-abros-olive-original-imahfu95qgkmbm2h.jpeg?q=70&crop=false",
        img3:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/v/f/i/-original-imah3fgpb8u6raet.jpeg?q=70&crop=false",
        img4:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/v/e/x/-original-imah34z8mzzsjnga.jpeg?q=70&crop=false",
        img5:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/o/h/k/-original-imahfqycchbgnhyq.jpeg?q=70&crop=false",
        price:2999,
        desc:"Amazing Product To Buy"
    },
    {
        name:"CAMPUS MAGNITE Running",
        subname:"Walking and Workout Shoes | Stylish Knitted & Light Weight Running Shoes For Men",
        img1:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/v/t/3/-original-imahfxv9xgrswduy.jpeg?q=70&crop=false",
        img2:"https://rukminim2.flixcart.com/image/832/832/ktszgy80/shoe/z/a/z/6-6g-851-campus-r-slate-navy-original-imag726zkfpv8nhk.jpeg?q=70&crop=false",
        img3:"https://rukminim2.flixcart.com/image/832/832/ktszgy80/shoe/4/h/9/6-6g-851-campus-r-slate-navy-original-imag726zswgzhg3t.jpeg?q=70&crop=false",
        img4:"https://rukminim2.flixcart.com/image/832/832/ktszgy80/shoe/4/f/u/6-6g-851-campus-r-slate-navy-original-imag726zwknq5cqz.jpeg?q=70&crop=false",
        img5:"https://rukminim2.flixcart.com/image/832/832/ktszgy80/shoe/1/v/7/6-6g-851-campus-r-slate-navy-original-imag726zueyfg6fr.jpeg?q=70&crop=false",
        price:799,
        desc:"Amazing Product To Buy"
    },
    {
        name:"CAMPUS FIRST Running",
        subname:"Walking and Workout Shoes | Stylish Knitted & Light Weight Running Shoes For Men",
        img1:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/n/f/v/-original-imagz5kfmbfezcwa.jpeg?q=70&crop=false",
        img2:"https://rukminim2.flixcart.com/image/832/832/kwnv6a80/shoe/n/z/l/8-11g-787-8-campus-blk-mattlic-grn-original-imag9aknbhhwzcp4.jpeg?q=70&crop=false",
        img3:"https://rukminim2.flixcart.com/image/832/832/kwnv6a80/shoe/c/i/h/8-11g-787-8-campus-blk-mattlic-grn-original-imag9akngbrzswq5.jpeg?q=70&crop=false",
        img4:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/k/z/o/-original-imagyg4xh6uzwcjb.jpeg?q=70&crop=false",
        img5:"https://rukminim2.flixcart.com/image/832/832/kwnv6a80/shoe/n/t/g/8-11g-787-8-campus-blk-mattlic-grn-original-imag9akny2a26y7y.jpeg?q=70&crop=false",
        price:1299,
        desc:"Amazing Product To Buy"
    },
    {
        name:"CAMPUS A-Gear",
        subname:"Walking and Workout Shoes | Stylish Knitted & Light Weight Running Shoes For Men",
        img1:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/v/w/4/-original-imagyxryyhdwyedp.jpeg?q=70&crop=false",
        img2:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/e/k/l/7-agr-007-campus-blk-r-blu-mstd-original-imagrhghnggrkvbw.jpeg?q=70&crop=false",
        img3:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/x/d/u/7-agr-007-campus-blk-r-blu-mstd-original-imagrhgh3np69v3x.jpeg?q=70&crop=false",
        img4:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/a/d/0/7-agr-007-campus-blk-r-blu-mstd-original-imagrhghcv2yagcq.jpeg?q=70&crop=false",
        img5:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/x/7/p/7-agr-007-campus-blk-r-blu-mstd-original-imagrhghbunm5ypg.jpeg?q=70&crop=false",
        price:799,
        desc:"Amazing Product To Buy"
    },
    {
        name:"CAMPUS Velcro Running",
        subname:"Walking and Workout Shoes | Stylish Knitted & Light Weight Running Shoes For Men",
        img1:"https://rukminim2.flixcart.com/image/832/832/xif0q/kids-shoe/9/8/m/-original-imahyyzmh2jhcyqa.jpeg?q=70&crop=false",
        img2:"https://rukminim2.flixcart.com/image/832/832/xif0q/kids-shoe/q/8/o/12c-srm-02v-campus-original-imaggzed3vmxnd2p.jpeg?q=70&crop=false",
        img3:"https://rukminim2.flixcart.com/image/832/832/xif0q/kids-shoe/3/u/h/12c-srm-02v-campus-original-imaggzedygah6hd6.jpeg?q=70&crop=false",
        img4:"https://rukminim2.flixcart.com/image/832/832/xif0q/kids-shoe/3/u/h/12c-srm-02v-campus-original-imaggzedygah6hd6.jpeg?q=70&crop=false",
        img5:"https://rukminim2.flixcart.com/image/832/832/xif0q/kids-shoe/z/a/f/12c-srm-02v-campus-original-imaggzedrdfkagrk.jpeg?q=70&crop=false",
        price:599,
        desc:"Amazing Product To Buy"
    },
    {
        name:"CAMPUS Ultra Shoes",
        subname:"Walking and Workout Shoes | Stylish Knitted & Light Weight Running Shoes For Men",
        img1:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/l/b/5/-original-imahfxt55ayexs7u.jpeg?q=70&crop=false",
        img2:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/i/i/o/9-22g-974a-campus-d-gry-r-blu-original-imagn58e6gfpzhgh.jpeg?q=70&crop=false",
        img3:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/5/d/v/9-22g-974a-campus-d-gry-r-blu-original-imagn58ewhns3sre.jpeg?q=70&crop=false",
        img4:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/s/y/i/9-22g-974a-campus-d-gry-r-blu-original-imagn58eegrrhrnx.jpeg?q=70&crop=false",
        img5:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/b/3/v/9-22g-974a-campus-d-gry-r-blu-original-imagn58eg7hjvhk5.jpeg?q=70&crop=false",
        price:1399,
        desc:"Amazing Product To Buy"
    },
    {
        name:"CAMPUS REMO Running",
        subname:"Walking and Workout Shoes | Stylish Knitted & Light Weight Running Shoes For Men",
        img1:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/w/0/q/-original-imagg7tfczagyncg.jpeg?q=70&crop=false",
        img2:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/2/v/f/-original-imagyg4xjfqb6zrz.jpeg?q=70&crop=false",
        img3:"https://rukminim2.flixcart.com/image/832/832/kqse07k0/shoe/v/e/z/7-5g-725-campus-d-red-blk-original-imag4pvfxuwf4nzv.jpeg?q=70&crop=false",
        img4:"https://rukminim2.flixcart.com/image/832/832/kqse07k0/shoe/l/r/l/7-5g-725-campus-d-red-blk-original-imag4pvfzvfvpnbp.jpeg?q=70&crop=false",
        img5:"https://rukminim2.flixcart.com/image/832/832/kqse07k0/shoe/q/d/k/7-5g-725-campus-d-red-blk-original-imag4pvfnk6udeu3.jpeg?q=70&crop=false",
        price:899,
        desc:"Amazing Product To Buy"
    }
]

async function seedDB1(){
    await Arrival.insertMany(products)
    console.log("Data Seeded Successfully of SeedDB1");
}

module.exports=seedDB1