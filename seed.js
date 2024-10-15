const Product=require('./models/Product')

const products=[
    {
        name:"Campus MIKE (N)",
        subname:"Walking and Workout Shoes | Stylish Knitted & Light Weight Running Shoes For Men",
        img1:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/q/r/j/-original-imagzjg25cg9wsrj.jpeg?q=70&crop=false",
        img2:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/d/o/e/9-5g-845-campus-mod-blu-wht-original-imag4g3xnanhz7zk-bb.jpeg?q=70&crop=false",
        img3:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/a/n/7/-original-imagyg4x6shzywpg.jpeg?q=70&crop=false",
        img4:"https://rukminim2.flixcart.com/image/832/832/kqidx8w0/shoe/i/b/t/9-5g-845-campus-mod-blu-wht-original-imag4g3xygbm3wfr.jpeg?q=70&crop=false",
        img5:"https://rukminim2.flixcart.com/image/832/832/kqidx8w0/shoe/s/b/7/9-5g-845-campus-mod-blu-wht-original-imag4g3x52qrhhhh.jpeg?q=70&crop=false",
        price:999,
        desc:"Amazing Product To Buy"
    },
    {
        name:"CAMPUS Canva Running",
        subname:"Walking and Workout Shoes | Stylish Knitted & Light Weight Running Shoes For Men",
        img1:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/n/e/f/10-22g-1222-10-campus-d-gry-blk-original-imah38narzdtzudn.jpeg?q=70&crop=false",
        img2:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/6/a/w/6-22g-1246-campus-navy-l-sky-original-imah3dtdyznj6h77.jpeg?q=70&crop=false",
        img3:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/d/j/9/-original-imah46kcrhnqjtmt.jpeg?q=70&crop=false",
        img4:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/r/i/x/-original-imah46ksxecfvyf6.jpeg?q=70&crop=false",
        img5:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/h/a/q/10-22g-1222-10-campus-d-gry-blk-original-imah38nangy9zbyw.jpeg?q=70&crop=false",
        price:1099,
        desc:"Amazing Product To Buy"
    },
    {
        name:"CAMPUS TERMINATOR (N)",
        subname:"Walking and Workout Shoes | Stylish Knitted & Light Weight Running Shoes For Men",
        img1:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/i/j/d/-original-imagr7vgzrm6eyyx.jpeg?q=70&crop=false",
        img2:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/b/q/3/8-5g-846-campus-r-slate-org-original-imagh2tbzgfvggdz.jpeg?q=70&crop=false",
        img3:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/q/z/a/8-5g-846-campus-r-slate-org-original-imagh2tb3hhggt4s.jpeg?q=70&crop=false",
        img4:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/p/0/i/8-5g-846-campus-r-slate-org-original-imagh2tbmsgzther.jpeg?q=70&crop=false",
        img5:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/i/q/d/8-5g-846-campus-r-slate-org-original-imagh2tbdehbyq6t.jpeg?q=70&crop=false",
        price:1399,
        desc:"Amazing Product To Buy"
    },
    {
        name:"CAMPUS CRYSTA PRO",
        subname:"Walking and Workout Shoes | Stylish Knitted & Light Weight Running Shoes For Men",
        img1:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/s/r/o/-original-imagyxqzmhk6fsyf.jpeg?q=70&crop=false",
        img2:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/n/e/x/-original-imagyk4zqwynphcx.jpeg?q=70&crop=false",
        img3:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/y/k/j/-original-imagyk4zg3mkter8.jpeg?q=70&crop=false",
        img4:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/6/t/n/-original-imagyk4zucb8jnjn.jpeg?q=70&crop=false",
        img5:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/1/z/y/-original-imagyk4zsp2tyxrd.jpeg?q=70&crop=false",
        price:1499,
        desc:"Amazing Product To Buy"
    },
    {
        name:"CAMPUS NORTH PLUS",
        subname:"Walking and Workout Shoes | Stylish Knitted & Light Weight Running Shoes For Men",
        img1:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/f/e/m/-original-imagg6rcqgg295jj.jpeg?q=70&crop=false",
        img2:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/p/j/c/-original-imaghvb4qbjqckyd.jpeg?q=70&crop=false",
        img3:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/a/8/r/-original-imagyg4xthsqdyx5.jpeg?q=70&crop=false",
        img4:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/n/q/a/6-11g-677-6-campus-t-blu-blk-original-imagh28gucgpfmby.jpeg?q=70&crop=false",
        img5:"https://rukminim2.flixcart.com/image/832/832/kfh5ifk0-0/shoe/g/l/k/5g-677-6-campus-t-blu-blk-original-imafvxc9zsqsnvfg.jpeg?q=70&crop=false",
        price:1399,
        desc:"Amazing Product To Buy"
    },
    {
        name:"CAMPUS TERMINATOR (N)",
        subname:"Walking and Workout Shoes | Stylish Knitted & Light Weight Running Shoes For Men",
        img1:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/1/x/6/-original-imahfuehugga5szw.jpeg?q=70&crop=false",
        img2:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/c/o/p/9-5g-846-9-campus-gry-d-gry-original-imagqtk9jbehgywz.jpeg?q=70&crop=false",
        img3:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/m/v/2/9-5g-846-9-campus-gry-d-gry-original-imagqtk9c8mkzr6w.jpeg?q=70&crop=false",
        img4:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/p/g/t/9-5g-846-9-campus-gry-d-gry-original-imagqtk99fan52yy.jpeg?q=70&crop=false",
        img5:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/q/7/5/9-5g-846-9-campus-gry-d-gry-original-imagqtk9kbrgs2hd.jpeg?q=70&crop=false",
        price:1499,
        desc:"Amazing Product To Buy"
    },
    {
        name:"CAMPUS Siren Running",
        subname:"Walking and Workout Shoes | Stylish Knitted & Light Weight Running Shoes For Men",
        img1:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/r/k/j/5-22l-961-5-campus-navy-pink-original-imah38n9pxwghvnf.jpeg?q=70&crop=false",
        img2:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/v/h/o/-original-imah46jfewf5de3m.jpeg?q=70&crop=false",
        img3:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/v/n/f/-original-imah46jfd3yherzk.jpeg?q=70&crop=false",
        img4:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/o/n/x/-original-imah46kcfgbhjwph.jpeg?q=70&crop=false",
        img5:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/v/v/p/5-22l-961-5-campus-navy-pink-original-imah38n99hu5khxv.jpeg?q=70&crop=false",
        price:1999,
        desc:"Amazing Product To Buy"
    },
    {
        name:"CAMPUS MAGNITE Running Shoes",
        subname:"Walking and Workout Shoes | Stylish Knitted & Light Weight Running Shoes For Men",
        img1:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/w/0/t/-original-imagsn6pktxgskxh.jpeg?q=70&crop=false",
        img2:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/w/w/x/-original-imaggf9cymnykcew-bb.jpeg?q=70&crop=false",
        img3:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/i/r/b/-original-imaggf9cb2z8aghz.jpeg?q=70&crop=false",
        img4:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/1/v/l/-original-imaggf9cu6rtkcyk.jpeg?q=70&crop=false",
        img5:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/i/7/g/-original-imaggf9c82c8txjj.jpeg?q=70&crop=false",
        price:2199,
        desc:"Amazing Product To Buy"
    },
    {
        name:"CAMPUS CAMP ZYLON",
        subname:"Walking and Workout Shoes | Stylish Knitted & Light Weight Running Shoes For Men",
        img1:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/n/u/n/-original-imags8us44b4jyxh.jpeg?q=70&crop=false",
        img2:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/p/u/t/7-22g-985-campus-blk-original-imagmnb6zmzsa6zn.jpeg?q=70&crop=false",
        img3:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/k/t/l/-original-imagyg4ycs78zgnp.jpeg?q=70&crop=false",
        img4:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/p/x/s/7-22g-985-campus-blk-original-imagmnb63e6jmc7t.jpeg?q=70&crop=false",
        img5:"https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/v/9/g/7-22g-985-campus-blk-original-imagmnb6zhwtwpgk.jpeg?q=70&crop=false",
        price:1199,
        desc:"Amazing Product To Buy"
    }
]


async function seedDB(){
    await Product.insertMany(products)
    console.log("Data Seeded Successfully");
}

module.exports=seedDB