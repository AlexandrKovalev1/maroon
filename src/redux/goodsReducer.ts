import highCover from '../img/goodsImg/High.png';
import restCover from '../img/goodsImg/Rest.png';
import roseCover from '../img/goodsImg/Rose.png';
import milkCover from '../img/goodsImg/Milk.png';
import paradiseCover from '../img/goodsImg/Paradise.png';
import sunCover from '../img/goodsImg/Sun.png';
import violetCover from '../img/goodsImg/Violet.png';
import cleanCover from '../img/goodsImg/Clean.png';
import coconutCover from '../img/goodsImg/Coconut.png';
import lavenderCover from '../img/goodsImg/Lavender.png';
import lotosCover from '../img/goodsImg/Lotos.png';
import earthCover from '../img/goodsImg/Earth.png';

const FILTER_GOODS = 'goods-reducer/FILTER_GOODS';
const CLEAR_FILTERS = 'goods-reducer/CLEAR_FILTERS';
const GET_INIT_GOODS = 'goods-reducer/GET_INIT_GOODS';
const ADD_PRODUCT_TO_REСENTL = 'goods-reducer/ADD_PRODUCT_TO_REСENTL';
const GET_PRODUCT = 'goods-reducer/GET_PRODUCT';

type OptionsType = {
    id: number
    volume: string
    price: number
    availability: boolean
};


type InitialStateProductType = {
    id: number,
    coverPicture: string | any
    title: string
    options: Array<OptionsType>
    forSkinType: Array<string>
    designation: string
    type: string
    smallDescription: string
    aboutInfo: string
    composition: string
    methodOfApplication: string
}


type InitialStateType = {
    allGoods: Array<InitialStateProductType>
    initGoods: Array<InitialStateProductType>
    initRecentesGoods: Array<InitialStateProductType>
    bestSellers: Array<InitialStateProductType>
    productCard: InitialStateProductType | null
    isFiltered: boolean
}

let initialState: InitialStateType = {
    allGoods: [
        {
            id: 1,
            coverPicture: highCover,
            title: 'High',
            options: [
                {
                    id: 9496,
                    volume: '30ml',
                    price: 790,
                    availability: true,
                },
                {
                    id: 2391,
                    volume: '50ml',
                    price: 990,
                    availability: true,
                },

            ],
            forSkinType: ['Сухая', 'Нормальная'],
            designation: 'forFace',
            type: 'Крема для лица',
            smallDescription: 'крем для лица',
            aboutInfo: 'Дневной крем для лица с гиалуроновой кислотой и органическим экстрактом каланхоэ интенсивно увлажняет кожу. В основе формулы – комплекс Hyaluronic Power, разработанный Лабораториями Clarins, который запускает естественные механизмы увлажнения кожи и помогает сохранять запасы ее влаги. Увлажняющий крем подходит для сухой и нормальной кожи. ',
            composition: 'AQUA/WATER/EAU. CAPRYLIC/CAPRIC TRIGLYCERIDE. BETAINE. PROPANEDIOL. CETEARYL ALCOHOL. GLYCERIN. PENTYLENE GLYCOL. SILICA. GLYCERYL STEARATE. PEG-100 STEARATE. STEARYL ALCOHOL. DIMETHICONE. HYDROXYETHYL ACRYLATE/SODIUM ACRYLOYLDIMETHYL TAURATE COPOLYMER. CETEARYL GLUCOSIDE. SQUALANE. PARFUM/FRAGRANCE. HYDROXYACETOPHENONE. SODIUM HYALURONATE. CHLORPHENESIN. ETHYLHEXYLGLYCERIN. TOCOPHERYL ACETATE. DIMETHICONOL. POLYSORBATE 60. TOCOPHEROL. DISODIUM EDTA. BUTYLENE GLYCOL. SORBITAN ISOSTEARATE. KALANCHOE PINNATA LEAF EXTRACT. MARRUBIUM VULGARE EXTRACT. CITRIC ACID. PHENETHYL ALCOHOL. FURCELLARIA LUMBRICALIS EXTRACT. SODIUM BENZOATE. POTASSIUM SORBATE. LAPSANA COMMUNIS FLOWER/LEAF/STEM EXTRACT. MARIS SAL/SEA SALT/SEL MARIN. [V4181A]',
            methodOfApplication: 'Наносите увлажняющий дневной крем для лица на очищенную кожу лица и шеи. Возьмите небольшое количество крема, разогрейте в ладонях, нанесите легкими надавливающими движениями и выполните дренирующий массаж. ',
        },
        {
            id: 3,
            coverPicture: restCover,
            title: 'Rest',
            options: [
                {
                    id: 5121,
                    volume: '20g',
                    price: 690,
                    availability: true,
                },
                {
                    id: 5429,
                    volume: '45g',
                    price: 1099,
                    availability: true,
                },

            ],
            forSkinType: ['Жирная'],
            designation: 'forFace',
            type: 'Пудры',
            smallDescription: 'минеральная пудра',
            aboutInfo: 'Компактная пудра для лица освежает и матирует, не пересушивая кожу. Предотвращает появление прыщей благодаря зелёному чаю и минеральной пудре в составе. Не содержит тальк. Не провоцирует закупоривание пор. Уникальная технология Pollu-Barrier™ защищает кожу от вредного воздействия окружающей среды, уменьшает риск появления новых высыпаний и раздражений.',
            composition: 'Слюда, алюминия крахмал октенилсукцинат, полиметил метакрилат, диоксид кремния, октилдодецил стеароил стеарат, полиэтилен, полипропилен, фитосквалан, триэтоксикаприлилсилан, диметилсилилат диоксида кремния, сорбитан изостеарат, экстракт листьев зеленого чая, экстракт хлопка, масло лаванды, масло цветов розы, масло можжевельника мексиканского, каприлик/каприловый триглицерид, 1,2-гександиол, метикон, глицерил каприлат, вода, бутиленгликоль, цетеариловый спирт, глицерил стеарат, стеариновая кислота, фильтрат фермента альтеромоноса, этилгексил изононаноат, фитостерил/изостеарил/цетил/стеарил/бегенил димер дилинолеат, стерол соевый, гидроксипропил БИС-пальмитамид МЕА, натрия ПКК, эстолид пенника лугового, лактат натрия, лецитин, керамид NP, цетеариловый глюкозид, гидрогенизированный полидецен, аргинин, гидроксиэтил мочевины, аспарагиновая кислота, пирролидонкарбоновая кислота, гликосфинголипиды, глицерил цитрат/лактат/линолеат/олеат, цетеарет-20, масло ши, глицин, аланин, серин, валин, дикалия глицирризат, изолейцин, треонин, пролин, фенилаланин, гистидин, керамид AP, токоферил ацетат, линалоол, цитронеллол, гераниол.',
            methodOfApplication: 'С помощью спонжа нанесите пудру на лицо или участки кожи, склонные к жирности.',
        },
        {
            id: 4,
            coverPicture: roseCover,
            title: 'Rose',
            options: [
                {
                    id: 465,
                    volume: '50ml',
                    price: 890,
                    availability: true,
                },
                {
                    id: 878,
                    volume: '30ml',
                    price: 599,
                    availability: true,
                },

            ],
            forSkinType: ['Нормальная'],
            designation: 'forFace',
            type: 'Крема для лица',
            smallDescription: 'крем для лица',
            aboutInfo: 'Увлажняющий крем идеально подходит для повседневного ухода за молодой кожей.Крем равномерно распределяется по поверхности благодаря легкой текстуре, обеспечивает глубокое увлажнение, регенерацию клеток. ',
            composition: 'Aqua, Cyclomethicone, Dicaprylyl Carbonate, Butylene Glycol, Glycerin, Tapioca Starch, Nelumbium Speciosum Flower Extract, Calendula Officinalis Flower Extract, Propylene Glycol, Tocopherol, Glycine Soja Oil, Dimethiconol, Citronellol, Limonene.',
            methodOfApplication: 'Нанесите крем на очищенную кожу лица легкими массажными круговыми движениями, избегая области вокруг глаз. Подходит для дневного и ночного ухода.',
        },
        {
            id: 5,
            coverPicture: milkCover,
            title: 'Milk',
            options: [
                {
                    id: 9546,
                    volume: '150ml',
                    price: 790,
                    availability: true,
                },
                {
                    id: 9979,
                    volume: '300ml',
                    price: 1099,
                    availability: true,
                },

            ],
            forSkinType: ['Комбинированная'],
            designation: 'forBody',
            type: 'Масла',
            smallDescription: 'масло для тела',
            aboutInfo: '100% натуральное косметическое кокосовое масло для ухода за кожей лица и тела, а также для волос.Кокосовое масло содержит витамины А, С, Е, природные антиоксиданты и насыщенные жирные кислоты, одна из них - гиалуроновая кислота, которая является самым сильным увлажнителем.Масло кокоса обладает защитными, смягчающими и разглаживающим действиями, что обеспечивает эффективный уход за волосами и кожей. Оно является замечательным натуральным размягчителем, оказывает питательное, увлажняющее и противовоспалительное действие.Примечательно, что натуральное кокосовое масло - это один из лучших источников питательных веществ. Масло способствует мешает потере белка во время мытья. Косметическое кокосовое масло покрывает волос защитным слоем, что препятствует набуханию, а также повреждению волос при сушке полотенцем и при расчесывании, способствует росту и укреплению волос, освобождает от перхоти и восстанавливает поврежденные волосы. Питает кожу головы и препятствует выпадению волос.',
            composition: '100% кокосовое масло.',
            methodOfApplication: 'Кокосовое масло можно наносить в чистом виде. На его основе можно делать маски для кожи, для лица и для волос. Также коксовое масло можно использовать совместно с другими увлажняющими и питающими средствами для лучшего усвоения полезных веществ. Как альтернативу крему — для питания и увлажнения кожи. Как средство для загара — делает загар ровным, при этом препятствует обезвоживанию и сухости кожи. Как смягчающее и успокаивающее средство после эпиляции, маникюра, педикюра, бритья. Делает кожу гладкой и ровной. Оказывает противовоспалительное действие. Как маска для волос — питает, увлажняет и восстанавливает волосы. Минимизирует потери белка во время мытья.',
        },
        {
            id: 6,
            coverPicture: paradiseCover,
            title: 'Paradise',
            options: [
                {
                    id: 2075,
                    volume: '15g',
                    price: 590,
                    availability: true,
                },
                {
                    id: 9059,
                    volume: '40g',
                    price: 890,
                    availability: true,
                },

            ],
            forSkinType: ['Нормальная', 'Жирная'],
            designation: 'forFace',
            type: 'Пудры',
            smallDescription: 'минеральная пудра',
            aboutInfo: 'Компактная пудра для лица освежает и матирует, не пересушивая кожу. Предотвращает появление прыщей благодаря зелёному чаю и минеральной пудре в составе. Не содержит тальк. Не провоцирует закупоривание пор. Уникальная технология Pollu-Barrier™ защищает кожу от вредного воздействия окружающей среды, уменьшает риск появления новых высыпаний и раздражений.',
            composition: 'Слюда, алюминия крахмал октенилсукцинат, полиметил метакрилат, диоксид кремния, октилдодецил стеароил стеарат, полиэтилен, полипропилен, фитосквалан, триэтоксикаприлилсилан, диметилсилилат диоксида кремния, сорбитан изостеарат, экстракт листьев зеленого чая, экстракт хлопка, масло лаванды, масло цветов розы, масло можжевельника мексиканского, каприлик/каприловый триглицерид, 1,2-гександиол, метикон, глицерил каприлат, вода, бутиленгликоль, цетеариловый спирт, глицерил стеарат, стеариновая кислота, фильтрат фермента альтеромоноса, этилгексил изононаноат, фитостерил/изостеарил/цетил/стеарил/бегенил димер дилинолеат, стерол соевый, гидроксипропил БИС-пальмитамид МЕА, натрия ПКК, эстолид пенника лугового, лактат натрия, лецитин, керамид NP, цетеариловый глюкозид, гидрогенизированный полидецен, аргинин, гидроксиэтил мочевины, аспарагиновая кислота, пирролидонкарбоновая кислота, гликосфинголипиды, глицерил цитрат/лактат/линолеат/олеат, цетеарет-20, масло ши, глицин, аланин, серин, валин, дикалия глицирризат, изолейцин, треонин, пролин, фенилаланин, гистидин, керамид AP, токоферил ацетат, линалоол, цитронеллол, гераниол.',
            methodOfApplication: 'С помощью спонжа нанесите пудру на лицо или участки кожи, склонные к жирности',
        },
        {
            id: 7,
            coverPicture: sunCover,
            title: 'Sun',
            options: [
                {
                    id: 3392,
                    volume: '20g',
                    price: 90,
                    availability: true,
                },
            ],
            forSkinType: ['Комбинированная'],
            designation: 'forBody',
            type: 'Бомбочки для ванны',
            smallDescription: 'бомбочка для ванны',
            aboutInfo: 'Бомбочки для ванны - отличный вариант для отдыха на высоком уровне, они способны снять усталость после тяжёлого рабочего дня, избавиться от стресса, помогут Вам расслабиться и восстановить силы.Принцип действия очень простой: шарики, попадая в теплую воду, распадаются и шипят, образуя небольшие гейзеры.При приеме ванны с бомбочками происходит процесс ингаляции, который благотворно влияет на психоэмоциональное состояние, и является профилактикой простудных заболеваний.Вы получите истинное наслаждение, принимая теплую, ароматизированную и красивую ванну.',
            composition: 'Лимонная кислота (Citric acid), карбонат натрия (Sodium carbonate), соль морская (Sea salt), масло виноградной косточки (Vitis vinifera oil), эфирное масло апельсина (Citrus aurantium essential oil), эфирное масло можжевельника (Juniperus communis essential oil), эфирное масло грейпфрута (Citrus paradisi essential oil), эфирное масло лимона (Limonum essential oil).',
            methodOfApplication: 'Один шарик рассчитан на одно принятие ванны. Положите шарик в ванну, наполненную теплой водой (36-38 градусов), и дайте ему раствориться. Принимайте ванну 15-20 минут. После ванны не используйте мыло или гель для душа. Ополоснитесь теплой водой, промокните тело полотенцем и позвольте маслам впитаться в Вашу кожу.',
        },
        {
            id: 8,
            coverPicture: violetCover,
            title: 'Violet',
            options: [
                {
                    id: 4200,
                    volume: '50ml',
                    price: 690,
                    availability: true,
                },
                {
                    id: 8171,
                    volume: '150ml',
                    price: 1099,
                    availability: true,
                },

            ],
            forSkinType: ['Нормальная', 'Сухая'],
            designation: 'forFace',
            type: 'Крема для лица',
            smallDescription: 'крем для лица',
            aboutInfo: 'Дневной крем для лица с гиалуроновой кислотой и органическим экстрактом каланхоэ интенсивно увлажняет кожу. В основе формулы – комплекс Hyaluronic Power, разработанный Лабораториями Clarins, который запускает естественные механизмы увлажнения кожи и помогает сохранять запасы ее влаги. Увлажняющий крем подходит для сухой и нормальной кожи. ',
            composition: 'AQUA/WATER/EAU. CAPRYLIC/CAPRIC TRIGLYCERIDE. BETAINE. PROPANEDIOL. CETEARYL ALCOHOL. GLYCERIN. PENTYLENE GLYCOL. SILICA. GLYCERYL STEARATE. PEG-100 STEARATE. STEARYL ALCOHOL. DIMETHICONE. HYDROXYETHYL ACRYLATE/SODIUM ACRYLOYLDIMETHYL TAURATE COPOLYMER. CETEARYL GLUCOSIDE. SQUALANE. PARFUM/FRAGRANCE. HYDROXYACETOPHENONE. SODIUM HYALURONATE. CHLORPHENESIN. ETHYLHEXYLGLYCERIN. TOCOPHERYL ACETATE. DIMETHICONOL. POLYSORBATE 60. TOCOPHEROL. DISODIUM EDTA. BUTYLENE GLYCOL. SORBITAN ISOSTEARATE. KALANCHOE PINNATA LEAF EXTRACT. MARRUBIUM VULGARE EXTRACT. CITRIC ACID. PHENETHYL ALCOHOL. FURCELLARIA LUMBRICALIS EXTRACT. SODIUM BENZOATE. POTASSIUM SORBATE. LAPSANA COMMUNIS FLOWER/LEAF/STEM EXTRACT. MARIS SAL/SEA SALT/SEL MARIN. [V4181A]',
            methodOfApplication: 'Наносите увлажняющий дневной крем для лица на очищенную кожу лица и шеи. Возьмите небольшое количество крема, разогрейте в ладонях, нанесите легкими надавливающими движениями и выполните дренирующий массаж. ',
        },
        {
            id: 9,
            coverPicture: cleanCover,
            title: 'Clean',
            options: [
                {
                    id: 2448,
                    volume: '100g',
                    price: 490,
                    availability: true,
                },
                {
                    id: 2664,
                    volume: '50g',
                    price: 350,
                    availability: true,
                },

            ],
            forSkinType: ['Жирная', 'Комбинированная'],
            designation: 'forFace',
            type: 'Маски',
            smallDescription: 'маска для лица',
            aboutInfo: 'Маска разработана для эффективной борьбы с несовершенствами жирной и проблемной кожи, склонной к появлению акне, расширенным порам, избыточному выделению себума, комедонам и постакне. Маска, обладая кератолическим действием, способствует быстрому избавлению от отмерших ороговевших клеток кожи, очищает комедоны, препятствует образованию новых. Способствует устранению отеков и застойных пятен, глубоко очищает, тонизирует и сужает поры, активизирует обменные процессы. Наличие в составе маски серы и бадяги придает маске активное рассасывающее действие, что предотвращает застойные процессы, образование сальных пробок, улучшает микроциркуляцию и цвет кожи. Каолин-адсорбирует излишки кожного сала, очищает кожу от токсинов, подсушивает и контролирует работу сальных желез. Бадяга-обладает активным рассасывающим, противоотечным действиями. Способствует исчезновению застойных пятен, рубцов, пигментных очагов, ускоряет заживление кожных покровов, очищает и сужает расширенные поры, уменьшает количество выделяемого себума. Сера-снижает гиперсекрецию сальных желез, оказывает противовоспалительное и обеззараживающее действия, препятствует образованию комедонов и воспалительных элементов. Возможно ощущение легкого покалывания и зуда. Назначение: Назначение: интенсивный уход, проведение поросуживающих процедур. Возможно использование после механической и аппаратной чисток. Подходит для домашнего использования.',
            composition: 'Aqua, Kaolin, Potassium Cetyl Phosphate, Butyrospermum Parkii (Shea) Butter, Glyceryl Stearate, Isopentyldiol, Sorbitol, Vitis Vinifera (Grape) Seed Oil, Caprylic/Capric Triglyceride, Cetearyl Alcohol, Sponge, Panthenol, Phenoxyethanol, PEG-35 Castor Oil, Allantoin, Tocopheryl Acetate, Propylene Glycol, Sulfurized TEA-Ricinoleate, Methylparaben, Triethanolamine, BHT, Bisabolol, Xanthan Gum, Propylparaben, Ethylparaben.',
            methodOfApplication: 'Нанести плотным слоем на подготовленную кожу. Оставить для воздействия на 10-20 минут. Остатки маски смыть теплой водой. ',
        },
        {
            id: 10,
            coverPicture: coconutCover,
            title: 'Coconut',
            options: [
                {
                    id: 1536,
                    volume: '300ml',
                    price: 990,
                    availability: true,
                },
                {
                    id: 6095,
                    volume: '500ml',
                    price: 1099,
                    availability: true,
                },

            ],
            forSkinType: ['Комбинированная'],
            designation: 'forBody',
            type: 'Масла',
            smallDescription: 'масло для тела',
            aboutInfo: '100% натуральное косметическое кокосовое масло для ухода за кожей лица и тела, а также для волос.Кокосовое масло содержит витамины А, С, Е, природные антиоксиданты и насыщенные жирные кислоты, одна из них - гиалуроновая кислота, которая является самым сильным увлажнителем.Масло кокоса обладает защитными, смягчающими и разглаживающим действиями, что обеспечивает эффективный уход за волосами и кожей. Оно является замечательным натуральным размягчителем, оказывает питательное, увлажняющее и противовоспалительное действие.Примечательно, что натуральное кокосовое масло - это один из лучших источников питательных веществ. Масло способствует мешает потере белка во время мытья. Косметическое кокосовое масло покрывает волос защитным слоем, что препятствует набуханию, а также повреждению волос при сушке полотенцем и при расчесывании, способствует росту и укреплению волос, освобождает от перхоти и восстанавливает поврежденные волосы. Питает кожу головы и препятствует выпадению волос.',
            composition: '100% кокосовое масло.',
            methodOfApplication: 'Кокосовое масло можно наносить в чистом виде. На его основе можно делать маски для кожи, для лица и для волос. Также коксовое масло можно использовать совместно с другими увлажняющими и питающими средствами для лучшего усвоения полезных веществ. Как альтернативу крему — для питания и увлажнения кожи. Как средство для загара — делает загар ровным, при этом препятствует обезвоживанию и сухости кожи. Как смягчающее и успокаивающее средство после эпиляции, маникюра, педикюра, бритья. Делает кожу гладкой и ровной. Оказывает противовоспалительное действие. Как маска для волос — питает, увлажняет и восстанавливает волосы. Минимизирует потери белка во время мытья.',
        },
        {
            id: 11,
            coverPicture: lavenderCover,
            title: 'Lavender',
            options: [
                {
                    id: 6893,
                    volume: '20g',
                    price: 690,
                    availability: true,
                },
                {
                    id: 6301,
                    volume: '45g',
                    price: 1099,
                    availability: true,
                },

            ],
            forSkinType: ['Комбинированная', 'Нормальная'],
            designation: 'forBody',
            type: 'Мыло',
            smallDescription: 'мыло ручной работы',
            aboutInfo: 'Мыло очищает кожу, делая ее мягкой и бархатистой. Имеет легкий и ненавязчивый аромат. Не сушит кожу.',
            composition: 'Вода, глицерин, пропиленгликоль, стеарат натрия, сорбитор, кокоамфоацетат натрия, лаурат натрия, парфюмерная композиция, пищевой краситель',
            methodOfApplication: '',
        },
        {
            id: 12,
            coverPicture: lotosCover,
            title: 'Lotos',
            options: [
                {
                    id: 8569,
                    volume: '50ml',
                    price: 890,
                    availability: true,
                },
                {
                    id: 4729,
                    volume: '30ml',
                    price: 699,
                    availability: true,
                },

            ],
            forSkinType: ['Жирная', 'Комбинированная'],
            designation: 'forFace',
            type: 'Маски',
            smallDescription: 'маска для лица',
            aboutInfo: 'Маска разработана для эффективной борьбы с несовершенствами жирной и проблемной кожи, склонной к появлению акне, расширенным порам, избыточному выделению себума, комедонам и постакне. Маска, обладая кератолическим действием, способствует быстрому избавлению от отмерших ороговевших клеток кожи, очищает комедоны, препятствует образованию новых. Способствует устранению отеков и застойных пятен, глубоко очищает, тонизирует и сужает поры, активизирует обменные процессы. Наличие в составе маски серы и бадяги придает маске активное рассасывающее действие, что предотвращает застойные процессы, образование сальных пробок, улучшает микроциркуляцию и цвет кожи. Каолин-адсорбирует излишки кожного сала, очищает кожу от токсинов, подсушивает и контролирует работу сальных желез. Бадяга-обладает активным рассасывающим, противоотечным действиями. Способствует исчезновению застойных пятен, рубцов, пигментных очагов, ускоряет заживление кожных покровов, очищает и сужает расширенные поры, уменьшает количество выделяемого себума. Сера-снижает гиперсекрецию сальных желез, оказывает противовоспалительное и обеззараживающее действия, препятствует образованию комедонов и воспалительных элементов. Возможно ощущение легкого покалывания и зуда. Назначение: Назначение: интенсивный уход, проведение поросуживающих процедур. Возможно использование после механической и аппаратной чисток. Подходит для домашнего использования.',
            composition: 'Aqua, Kaolin, Potassium Cetyl Phosphate, Butyrospermum Parkii (Shea) Butter, Glyceryl Stearate, Isopentyldiol, Sorbitol, Vitis Vinifera (Grape) Seed Oil, Caprylic/Capric Triglyceride, Cetearyl Alcohol, Sponge, Panthenol, Phenoxyethanol, PEG-35 Castor Oil, Allantoin, Tocopheryl Acetate, Propylene Glycol, Sulfurized TEA-Ricinoleate, Methylparaben, Triethanolamine, BHT, Bisabolol, Xanthan Gum, Propylparaben, Ethylparaben.',
            methodOfApplication: 'Нанести плотным слоем на подготовленную кожу. Оставить для воздействия на 10-20 минут. Остатки маски смыть теплой водой. ',
        },
        {
            id: 13,
            coverPicture: earthCover,
            title: 'Earth',
            options: [
                {
                    id: 9940,
                    volume: '20g',
                    price: 90,
                    availability: true,
                },
            ],
            forSkinType: ['Комбинированная'],
            designation: 'forBody',
            type: 'Бомбочки для ванны',
            smallDescription: 'бомбочка для ванны',
            aboutInfo: 'Бомбочки для ванны - отличный вариант для отдыха на высоком уровне, они способны снять усталость после тяжёлого рабочего дня, избавиться от стресса, помогут Вам расслабиться и восстановить силы.Принцип действия очень простой: шарики, попадая в теплую воду, распадаются и шипят, образуя небольшие гейзеры.При приеме ванны с бомбочками происходит процесс ингаляции, который благотворно влияет на психоэмоциональное состояние, и является профилактикой простудных заболеваний.Вы получите истинное наслаждение, принимая теплую, ароматизированную и красивую ванну.',
            composition: 'Лимонная кислота (Citric acid), карбонат натрия (Sodium carbonate), соль морская (Sea salt), масло виноградной косточки (Vitis vinifera oil), эфирное масло апельсина (Citrus aurantium essential oil), эфирное масло можжевельника (Juniperus communis essential oil), эфирное масло грейпфрута (Citrus paradisi essential oil), эфирное масло лимона (Limonum essential oil).',
            methodOfApplication: 'Один шарик рассчитан на одно принятие ванны. Положите шарик в ванну, наполненную теплой водой (36-38 градусов), и дайте ему раствориться. Принимайте ванну 15-20 минут. После ванны не используйте мыло или гель для душа. Ополоснитесь теплой водой, промокните тело полотенцем и позвольте маслам впитаться в Вашу кожу.',
        },
        {
            id: 33,
            coverPicture: highCover,
            title: 'Highi',
            options: [
                {
                    id: 5404,
                    volume: '30ml',
                    price: 790,
                    availability: true,
                },
                {
                    id: 9890,
                    volume: '50ml',
                    price: 990,
                    availability: true,
                },

            ],
            forSkinType: ['Сухая', 'Нормальная'],
            designation: 'forBody',
            type: 'Крема для тела',
            smallDescription: 'крем для тела',
            aboutInfo: 'для теста крем для тела',
            composition: 'AQUA/WATER/EAU. CAPRYLIC/CAPRIC TRIGLYCERIDE. BETAINE. PROPANEDIOL. CETEARYL ALCOHOL. GLYCERIN. PENTYLENE GLYCOL. SILICA. GLYCERYL STEARATE. PEG-100 STEARATE. STEARYL ALCOHOL. DIMETHICONE. HYDROXYETHYL ACRYLATE/SODIUM ACRYLOYLDIMETHYL TAURATE COPOLYMER. CETEARYL GLUCOSIDE. SQUALANE. PARFUM/FRAGRANCE. HYDROXYACETOPHENONE. SODIUM HYALURONATE. CHLORPHENESIN. ETHYLHEXYLGLYCERIN. TOCOPHERYL ACETATE. DIMETHICONOL. POLYSORBATE 60. TOCOPHEROL. DISODIUM EDTA. BUTYLENE GLYCOL. SORBITAN ISOSTEARATE. KALANCHOE PINNATA LEAF EXTRACT. MARRUBIUM VULGARE EXTRACT. CITRIC ACID. PHENETHYL ALCOHOL. FURCELLARIA LUMBRICALIS EXTRACT. SODIUM BENZOATE. POTASSIUM SORBATE. LAPSANA COMMUNIS FLOWER/LEAF/STEM EXTRACT. MARIS SAL/SEA SALT/SEL MARIN. [V4181A]',
            methodOfApplication: 'Наносите увлажняющий дневной крем для лица на очищенную кожу лица и шеи. Возьмите небольшое количество крема, разогрейте в ладонях, нанесите легкими надавливающими движениями и выполните дренирующий массаж. ',
        },
    ],
    initGoods: [],
    initRecentesGoods: [],
    bestSellers: [
        {
            id: 6,
            coverPicture: paradiseCover,
            title: 'Paradise',
            options: [
                {
                    id: 2075,
                    volume: '15g',
                    price: 590,
                    availability: true,
                },
                {
                    id: 9059,
                    volume: '40g',
                    price: 890,
                    availability: true,
                },

            ],
            forSkinType: ['Нормальная', 'Жирная'],
            designation: 'forFace',
            type: 'Пудры',
            smallDescription: 'минеральная пудра',
            aboutInfo: 'Компактная пудра для лица освежает и матирует, не пересушивая кожу. Предотвращает появление прыщей благодаря зелёному чаю и минеральной пудре в составе. Не содержит тальк. Не провоцирует закупоривание пор. Уникальная технология Pollu-Barrier™ защищает кожу от вредного воздействия окружающей среды, уменьшает риск появления новых высыпаний и раздражений.',
            composition: 'Слюда, алюминия крахмал октенилсукцинат, полиметил метакрилат, диоксид кремния, октилдодецил стеароил стеарат, полиэтилен, полипропилен, фитосквалан, триэтоксикаприлилсилан, диметилсилилат диоксида кремния, сорбитан изостеарат, экстракт листьев зеленого чая, экстракт хлопка, масло лаванды, масло цветов розы, масло можжевельника мексиканского, каприлик/каприловый триглицерид, 1,2-гександиол, метикон, глицерил каприлат, вода, бутиленгликоль, цетеариловый спирт, глицерил стеарат, стеариновая кислота, фильтрат фермента альтеромоноса, этилгексил изононаноат, фитостерил/изостеарил/цетил/стеарил/бегенил димер дилинолеат, стерол соевый, гидроксипропил БИС-пальмитамид МЕА, натрия ПКК, эстолид пенника лугового, лактат натрия, лецитин, керамид NP, цетеариловый глюкозид, гидрогенизированный полидецен, аргинин, гидроксиэтил мочевины, аспарагиновая кислота, пирролидонкарбоновая кислота, гликосфинголипиды, глицерил цитрат/лактат/линолеат/олеат, цетеарет-20, масло ши, глицин, аланин, серин, валин, дикалия глицирризат, изолейцин, треонин, пролин, фенилаланин, гистидин, керамид AP, токоферил ацетат, линалоол, цитронеллол, гераниол.',
            methodOfApplication: 'С помощью спонжа нанесите пудру на лицо или участки кожи, склонные к жирности',
        },
        {
            id: 7,
            coverPicture: sunCover,
            title: 'Sun',
            options: [
                {
                    id: 3392,
                    volume: '20g',
                    price: 90,
                    availability: true,
                },
            ],
            forSkinType: ['Комбинированная'],
            designation: 'forBody',
            type: 'Бомбочки для ванны',
            smallDescription: 'бомбочка для ванны',
            aboutInfo: 'Бомбочки для ванны - отличный вариант для отдыха на высоком уровне, они способны снять усталость после тяжёлого рабочего дня, избавиться от стресса, помогут Вам расслабиться и восстановить силы.Принцип действия очень простой: шарики, попадая в теплую воду, распадаются и шипят, образуя небольшие гейзеры.При приеме ванны с бомбочками происходит процесс ингаляции, который благотворно влияет на психоэмоциональное состояние, и является профилактикой простудных заболеваний.Вы получите истинное наслаждение, принимая теплую, ароматизированную и красивую ванну.',
            composition: 'Лимонная кислота (Citric acid), карбонат натрия (Sodium carbonate), соль морская (Sea salt), масло виноградной косточки (Vitis vinifera oil), эфирное масло апельсина (Citrus aurantium essential oil), эфирное масло можжевельника (Juniperus communis essential oil), эфирное масло грейпфрута (Citrus paradisi essential oil), эфирное масло лимона (Limonum essential oil).',
            methodOfApplication: 'Один шарик рассчитан на одно принятие ванны. Положите шарик в ванну, наполненную теплой водой (36-38 градусов), и дайте ему раствориться. Принимайте ванну 15-20 минут. После ванны не используйте мыло или гель для душа. Ополоснитесь теплой водой, промокните тело полотенцем и позвольте маслам впитаться в Вашу кожу.',
        },
        {
            id: 8,
            coverPicture: violetCover,
            title: 'Violet',
            options: [
                {
                    id: 4200,
                    volume: '50ml',
                    price: 690,
                    availability: true,
                },
                {
                    id: 8171,
                    volume: '150ml',
                    price: 1099,
                    availability: true,
                },

            ],
            forSkinType: ['Нормальная', 'Сухая'],
            designation: 'forFace',
            type: 'Крема для лица',
            smallDescription: 'крем для лица',
            aboutInfo: 'Дневной крем для лица с гиалуроновой кислотой и органическим экстрактом каланхоэ интенсивно увлажняет кожу. В основе формулы – комплекс Hyaluronic Power, разработанный Лабораториями Clarins, который запускает естественные механизмы увлажнения кожи и помогает сохранять запасы ее влаги. Увлажняющий крем подходит для сухой и нормальной кожи. ',
            composition: 'AQUA/WATER/EAU. CAPRYLIC/CAPRIC TRIGLYCERIDE. BETAINE. PROPANEDIOL. CETEARYL ALCOHOL. GLYCERIN. PENTYLENE GLYCOL. SILICA. GLYCERYL STEARATE. PEG-100 STEARATE. STEARYL ALCOHOL. DIMETHICONE. HYDROXYETHYL ACRYLATE/SODIUM ACRYLOYLDIMETHYL TAURATE COPOLYMER. CETEARYL GLUCOSIDE. SQUALANE. PARFUM/FRAGRANCE. HYDROXYACETOPHENONE. SODIUM HYALURONATE. CHLORPHENESIN. ETHYLHEXYLGLYCERIN. TOCOPHERYL ACETATE. DIMETHICONOL. POLYSORBATE 60. TOCOPHEROL. DISODIUM EDTA. BUTYLENE GLYCOL. SORBITAN ISOSTEARATE. KALANCHOE PINNATA LEAF EXTRACT. MARRUBIUM VULGARE EXTRACT. CITRIC ACID. PHENETHYL ALCOHOL. FURCELLARIA LUMBRICALIS EXTRACT. SODIUM BENZOATE. POTASSIUM SORBATE. LAPSANA COMMUNIS FLOWER/LEAF/STEM EXTRACT. MARIS SAL/SEA SALT/SEL MARIN. [V4181A]',
            methodOfApplication: 'Наносите увлажняющий дневной крем для лица на очищенную кожу лица и шеи. Возьмите небольшое количество крема, разогрейте в ладонях, нанесите легкими надавливающими движениями и выполните дренирующий массаж. ',
        },
        {
            id: 9,
            coverPicture: cleanCover,
            title: 'Clean',
            options: [
                {
                    id: 2448,
                    volume: '100g',
                    price: 490,
                    availability: true,
                },
                {
                    id: 2664,
                    volume: '50g',
                    price: 350,
                    availability: true,
                },

            ],
            forSkinType: ['Жирная', 'Комбинированная'],
            designation: 'forFace',
            type: 'Маски',
            smallDescription: 'маска для лица',
            aboutInfo: 'Маска разработана для эффективной борьбы с несовершенствами жирной и проблемной кожи, склонной к появлению акне, расширенным порам, избыточному выделению себума, комедонам и постакне. Маска, обладая кератолическим действием, способствует быстрому избавлению от отмерших ороговевших клеток кожи, очищает комедоны, препятствует образованию новых. Способствует устранению отеков и застойных пятен, глубоко очищает, тонизирует и сужает поры, активизирует обменные процессы. Наличие в составе маски серы и бадяги придает маске активное рассасывающее действие, что предотвращает застойные процессы, образование сальных пробок, улучшает микроциркуляцию и цвет кожи. Каолин-адсорбирует излишки кожного сала, очищает кожу от токсинов, подсушивает и контролирует работу сальных желез. Бадяга-обладает активным рассасывающим, противоотечным действиями. Способствует исчезновению застойных пятен, рубцов, пигментных очагов, ускоряет заживление кожных покровов, очищает и сужает расширенные поры, уменьшает количество выделяемого себума. Сера-снижает гиперсекрецию сальных желез, оказывает противовоспалительное и обеззараживающее действия, препятствует образованию комедонов и воспалительных элементов. Возможно ощущение легкого покалывания и зуда. Назначение: Назначение: интенсивный уход, проведение поросуживающих процедур. Возможно использование после механической и аппаратной чисток. Подходит для домашнего использования.',
            composition: 'Aqua, Kaolin, Potassium Cetyl Phosphate, Butyrospermum Parkii (Shea) Butter, Glyceryl Stearate, Isopentyldiol, Sorbitol, Vitis Vinifera (Grape) Seed Oil, Caprylic/Capric Triglyceride, Cetearyl Alcohol, Sponge, Panthenol, Phenoxyethanol, PEG-35 Castor Oil, Allantoin, Tocopheryl Acetate, Propylene Glycol, Sulfurized TEA-Ricinoleate, Methylparaben, Triethanolamine, BHT, Bisabolol, Xanthan Gum, Propylparaben, Ethylparaben.',
            methodOfApplication: 'Нанести плотным слоем на подготовленную кожу. Оставить для воздействия на 10-20 минут. Остатки маски смыть теплой водой. ',
        },
        {
            id: 10,
            coverPicture: coconutCover,
            title: 'Coconut',
            options: [
                {
                    id: 1536,
                    volume: '300ml',
                    price: 990,
                    availability: true,
                },
                {
                    id: 6095,
                    volume: '500ml',
                    price: 1099,
                    availability: true,
                },

            ],
            forSkinType: ['Комбинированная'],
            designation: 'forBody',
            type: 'Масла',
            smallDescription: 'масло для тела',
            aboutInfo: '100% натуральное косметическое кокосовое масло для ухода за кожей лица и тела, а также для волос.Кокосовое масло содержит витамины А, С, Е, природные антиоксиданты и насыщенные жирные кислоты, одна из них - гиалуроновая кислота, которая является самым сильным увлажнителем.Масло кокоса обладает защитными, смягчающими и разглаживающим действиями, что обеспечивает эффективный уход за волосами и кожей. Оно является замечательным натуральным размягчителем, оказывает питательное, увлажняющее и противовоспалительное действие.Примечательно, что натуральное кокосовое масло - это один из лучших источников питательных веществ. Масло способствует мешает потере белка во время мытья. Косметическое кокосовое масло покрывает волос защитным слоем, что препятствует набуханию, а также повреждению волос при сушке полотенцем и при расчесывании, способствует росту и укреплению волос, освобождает от перхоти и восстанавливает поврежденные волосы. Питает кожу головы и препятствует выпадению волос.',
            composition: '100% кокосовое масло.',
            methodOfApplication: 'Кокосовое масло можно наносить в чистом виде. На его основе можно делать маски для кожи, для лица и для волос. Также коксовое масло можно использовать совместно с другими увлажняющими и питающими средствами для лучшего усвоения полезных веществ. Как альтернативу крему — для питания и увлажнения кожи. Как средство для загара — делает загар ровным, при этом препятствует обезвоживанию и сухости кожи. Как смягчающее и успокаивающее средство после эпиляции, маникюра, педикюра, бритья. Делает кожу гладкой и ровной. Оказывает противовоспалительное действие. Как маска для волос — питает, увлажняет и восстанавливает волосы. Минимизирует потери белка во время мытья.',
        },
        {
            id: 11,
            coverPicture: lavenderCover,
            title: 'Lavender',
            options: [
                {
                    id: 6893,
                    volume: '20g',
                    price: 690,
                    availability: true,
                },
                {
                    id: 6301,
                    volume: '45g',
                    price: 1099,
                    availability: true,
                },

            ],
            forSkinType: ['Комбинированная', 'Нормальная'],
            designation: 'forBody',
            type: 'Мыло',
            smallDescription: 'мыло ручной работы',
            aboutInfo: 'Мыло очищает кожу, делая ее мягкой и бархатистой. Имеет легкий и ненавязчивый аромат. Не сушит кожу.',
            composition: 'Вода, глицерин, пропиленгликоль, стеарат натрия, сорбитор, кокоамфоацетат натрия, лаурат натрия, парфюмерная композиция, пищевой краситель',
            methodOfApplication: '',
        },
        {
            id: 12,
            coverPicture: lotosCover,
            title: 'Lotos',
            options: [
                {
                    id: 8569,
                    volume: '50ml',
                    price: 890,
                    availability: true,
                },
                {
                    id: 4729,
                    volume: '30ml',
                    price: 699,
                    availability: true,
                },

            ],
            forSkinType: ['Жирная', 'Комбинированная'],
            designation: 'forFace',
            type: 'Маски',
            smallDescription: 'маска для лица',
            aboutInfo: 'Маска разработана для эффективной борьбы с несовершенствами жирной и проблемной кожи, склонной к появлению акне, расширенным порам, избыточному выделению себума, комедонам и постакне. Маска, обладая кератолическим действием, способствует быстрому избавлению от отмерших ороговевших клеток кожи, очищает комедоны, препятствует образованию новых. Способствует устранению отеков и застойных пятен, глубоко очищает, тонизирует и сужает поры, активизирует обменные процессы. Наличие в составе маски серы и бадяги придает маске активное рассасывающее действие, что предотвращает застойные процессы, образование сальных пробок, улучшает микроциркуляцию и цвет кожи. Каолин-адсорбирует излишки кожного сала, очищает кожу от токсинов, подсушивает и контролирует работу сальных желез. Бадяга-обладает активным рассасывающим, противоотечным действиями. Способствует исчезновению застойных пятен, рубцов, пигментных очагов, ускоряет заживление кожных покровов, очищает и сужает расширенные поры, уменьшает количество выделяемого себума. Сера-снижает гиперсекрецию сальных желез, оказывает противовоспалительное и обеззараживающее действия, препятствует образованию комедонов и воспалительных элементов. Возможно ощущение легкого покалывания и зуда. Назначение: Назначение: интенсивный уход, проведение поросуживающих процедур. Возможно использование после механической и аппаратной чисток. Подходит для домашнего использования.',
            composition: 'Aqua, Kaolin, Potassium Cetyl Phosphate, Butyrospermum Parkii (Shea) Butter, Glyceryl Stearate, Isopentyldiol, Sorbitol, Vitis Vinifera (Grape) Seed Oil, Caprylic/Capric Triglyceride, Cetearyl Alcohol, Sponge, Panthenol, Phenoxyethanol, PEG-35 Castor Oil, Allantoin, Tocopheryl Acetate, Propylene Glycol, Sulfurized TEA-Ricinoleate, Methylparaben, Triethanolamine, BHT, Bisabolol, Xanthan Gum, Propylparaben, Ethylparaben.',
            methodOfApplication: 'Нанести плотным слоем на подготовленную кожу. Оставить для воздействия на 10-20 минут. Остатки маски смыть теплой водой. ',
        },
        {
            id: 13,
            coverPicture: earthCover,
            title: 'Earth',
            options: [
                {
                    id: 9940,
                    volume: '20g',
                    price: 90,
                    availability: true,
                },
            ],
            forSkinType: ['Комбинированная'],
            designation: 'forBody',
            type: 'Бомбочки для ванны',
            smallDescription: 'бомбочка для ванны',
            aboutInfo: 'Бомбочки для ванны - отличный вариант для отдыха на высоком уровне, они способны снять усталость после тяжёлого рабочего дня, избавиться от стресса, помогут Вам расслабиться и восстановить силы.Принцип действия очень простой: шарики, попадая в теплую воду, распадаются и шипят, образуя небольшие гейзеры.При приеме ванны с бомбочками происходит процесс ингаляции, который благотворно влияет на психоэмоциональное состояние, и является профилактикой простудных заболеваний.Вы получите истинное наслаждение, принимая теплую, ароматизированную и красивую ванну.',
            composition: 'Лимонная кислота (Citric acid), карбонат натрия (Sodium carbonate), соль морская (Sea salt), масло виноградной косточки (Vitis vinifera oil), эфирное масло апельсина (Citrus aurantium essential oil), эфирное масло можжевельника (Juniperus communis essential oil), эфирное масло грейпфрута (Citrus paradisi essential oil), эфирное масло лимона (Limonum essential oil).',
            methodOfApplication: 'Один шарик рассчитан на одно принятие ванны. Положите шарик в ванну, наполненную теплой водой (36-38 градусов), и дайте ему раствориться. Принимайте ванну 15-20 минут. После ванны не используйте мыло или гель для душа. Ополоснитесь теплой водой, промокните тело полотенцем и позвольте маслам впитаться в Вашу кожу.',
        },
        {
            id: 33,
            coverPicture: highCover,
            title: 'Highi',
            options: [
                {
                    id: 5404,
                    volume: '30ml',
                    price: 790,
                    availability: true,
                },
                {
                    id: 9890,
                    volume: '50ml',
                    price: 990,
                    availability: true,
                },

            ],
            forSkinType: ['Сухая', 'Нормальная'],
            designation: 'forBody',
            type: 'Крема для тела',
            smallDescription: 'крем для тела',
            aboutInfo: 'для теста крем для тела',
            composition: 'AQUA/WATER/EAU. CAPRYLIC/CAPRIC TRIGLYCERIDE. BETAINE. PROPANEDIOL. CETEARYL ALCOHOL. GLYCERIN. PENTYLENE GLYCOL. SILICA. GLYCERYL STEARATE. PEG-100 STEARATE. STEARYL ALCOHOL. DIMETHICONE. HYDROXYETHYL ACRYLATE/SODIUM ACRYLOYLDIMETHYL TAURATE COPOLYMER. CETEARYL GLUCOSIDE. SQUALANE. PARFUM/FRAGRANCE. HYDROXYACETOPHENONE. SODIUM HYALURONATE. CHLORPHENESIN. ETHYLHEXYLGLYCERIN. TOCOPHERYL ACETATE. DIMETHICONOL. POLYSORBATE 60. TOCOPHEROL. DISODIUM EDTA. BUTYLENE GLYCOL. SORBITAN ISOSTEARATE. KALANCHOE PINNATA LEAF EXTRACT. MARRUBIUM VULGARE EXTRACT. CITRIC ACID. PHENETHYL ALCOHOL. FURCELLARIA LUMBRICALIS EXTRACT. SODIUM BENZOATE. POTASSIUM SORBATE. LAPSANA COMMUNIS FLOWER/LEAF/STEM EXTRACT. MARIS SAL/SEA SALT/SEL MARIN. [V4181A]',
            methodOfApplication: 'Наносите увлажняющий дневной крем для лица на очищенную кожу лица и шеи. Возьмите небольшое количество крема, разогрейте в ладонях, нанесите легкими надавливающими движениями и выполните дренирующий массаж. ',
        },
    ],
    productCard: null,
    isFiltered: false,
}


const goodsReducer = (state = initialState, action: any): InitialStateType => {

    switch (action.type) {
        case FILTER_GOODS:
            if (action.params && Object.keys(action.params).length > 0) {

                let { forFace = [], forBody = [], forSkinType = [] } = action.params;
                let goodsType = [...forFace, ...forBody];
                let filteredGoods: Array<InitialStateProductType> = []

                if (forSkinType.length > 0) {
                    filteredGoods = state.allGoods.filter(item =>
                        item.forSkinType.some(i =>
                            forSkinType.includes(i)))
                }

                if (goodsType.length > 0) {
                    filteredGoods = [...state.allGoods].filter(
                        item => goodsType.includes(item.type));
                }

                return {
                    ...state,
                    initGoods: filteredGoods,
                    isFiltered: true,
                }
            } else {
                return state;
            };
        case CLEAR_FILTERS:
            localStorage.removeItem('filters')

            return {
                ...state,
                initGoods: [...state.allGoods],
                isFiltered: false,
            };
        case GET_INIT_GOODS:

            return {
                ...state,
                initGoods: [...state.allGoods]
            };
        case ADD_PRODUCT_TO_REСENTL:

            let recentItems = state.initRecentesGoods;

            let isFonndItem = Boolean(
                recentItems.find(item =>
                    item.id === action.id
                )
            );

            let newRecentGood = state.initGoods.find(item => item.id === action.id);



            if (!isFonndItem && newRecentGood) {

                if (recentItems.length <= 14) {
                    return {
                        ...state,
                        initRecentesGoods: [...recentItems, newRecentGood],
                    }
                } else {

                    return {
                        ...state,
                        initRecentesGoods: [...recentItems.slice(1), newRecentGood],
                    }

                }

            } else {
                return state;
            };
        case GET_PRODUCT:
            let product = state.allGoods.find(item => item.id === Number(action.id));

            if (product) {
                return {
                    ...state,
                    productCard: product,
                }
            } else {
                return state;
            }

        default:
            return state;

    }
}

type FilterGoodsParamsType = {
    forFace: Array<string>
    forBody: Array<string>
    forSkinType: Array<string>
}

type FilterGoodsActionType = {
    type: typeof FILTER_GOODS
    params: FilterGoodsParamsType
}

type ClearFiltersActionType = {
    type: typeof CLEAR_FILTERS
}

type GetInitGoodsActionType = {
    type: typeof GET_INIT_GOODS
}

type AddToRecentlActionType = {
    type: typeof ADD_PRODUCT_TO_REСENTL
    id: number
}

type GetProductActionType = {
    type: typeof GET_PRODUCT
    id: number
}

export const filterGoods = (params: FilterGoodsParamsType): FilterGoodsActionType => ({ type: FILTER_GOODS, params });
export const clearFilters = (): ClearFiltersActionType => ({ type: CLEAR_FILTERS });
export const getInitGoods = (): GetInitGoodsActionType => ({ type: GET_INIT_GOODS });
export const addProductToRecentl = (id: number): AddToRecentlActionType => ({ type: ADD_PRODUCT_TO_REСENTL, id });
export const getProduct = (id: number): GetProductActionType => ({ type: GET_PRODUCT, id });


export default goodsReducer;