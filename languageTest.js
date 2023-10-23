import { isNormalText } from './detection.js';

const testData = (inputString) => {
    if (isNormalText(inputString)) {
        return inputString;
    }
    return 'unsupported value detected';
};

const englishAlphabet =
    'abcdefghijklmnopqrstuvwxyz\n\r\tABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789!@#$%^&*()_+-=[]{};:\'"\\|,./<>?`~';
const greekAlphabet = 'αβγδεζηθικλμνξοπρστυφχψωΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ';

const russianAlphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
const arabicAlphabet = 'أبجدةهوزحطيكلمنسعفصقرشتثخذضظعغ١٢٣٤٥٦٧٨٩٠';
const urduAlphabet = 'ا ب پ ت ٹ ث ج چ ح خ د ڈ ذ ر ڑ ز ژ س ش ص ض ط ظ ع غ ف ق ک گ ل م ن ں ھ و ہ ے ی';
const hebrewAlphabet = 'אבגדהוזחטיכלמנסעפצקרשתךםןףץ';
const ethiopianAlphabet =
    'ሰማይ አይታረስ ንጉሥ አይከሰስ። ብላ ካለኝ እንደአባቴ በቆመጠኝ።ጌጥ ያለቤቱ ቁምጥና ነው።ደሀ በሕልሙ ቅቤ ባይጠጣ ንጣት በገደለው።የአፍ ወለምታ በቅቤ አይታሽም።አይጥ በበላ ዳዋ ተመታ።ሲተረጉሙ ይደረግሙ።ቀስ በቀስ፥ ዕንቁላል በእግሩ ይሄዳል።ድር ቢያብር አንበሳ ያስር።ሰው እንደቤቱ እንጅ እንደ ጉረቤቱ አይተዳደርም።እግዜር የከፈተውን ጉሮሮ ሳይዘጋው አይድርም።የጎረቤት ሌባ፥ ቢያዩት ይስቅ ባያዩት ያጠልቅ።ሥራ ከመፍታት ልጄን ላፋታት።ዓባይ ማደሪያ የለው፥ ግንድ ይዞ ይዞራል።የእስላም አገሩ መካ የአሞራ አገሩ ዋርካ።ተንጋሎ ቢተፉ ተመልሶ ባፉ።ወዳጅህ ማር ቢሆን ጨርስህ አትላሰው።እግርህን በፍራሽህ ልክ ዘርጋ።';

const hindiAlphabet = 'अआइईउऊऋएऐओऔकखगघचछजझटठडढणतथदधनपफबभमयरलवशषसह़ऽॐक़ख़ग़ज़ड़ढ़फ़य़ॠॡॢॣ०१२३४५६७८९॰';

const marathiAlphabet =
    'अआइईउऊएऐओऔकखगघचछजझटठडढणतथदधनपफबभमयरलवशषसहका खा कि खि की खी कु खु कू खू के खे को खो कौचा छा चि छि ची छी चु छु चू छू चे छे चो छो चौजा झा जि झि जी झी जु झु जू झू जे झे जो झो जौटा ठा टि ठि टी ठी टु ठु टू ठू टे ठे टो ठो टौडा ढा डि ढि डी ढी डु ढु डू ढू डे ढे डो ढो डौना नि नी नु नू ने नै नो नौपा पि पी पु पू पे पै पो पौबा भा बि भि बी भी बु भु बू भू बे भे बो भो बौमा मि मी मु मू मे मै मो मौया यी ये योरा री रे रोला ली ले लोवा वी वेशा शि शीसा सी सी सु सु सू सू से से सो सो सौहा हि ही हु हू हे है हो हौ ळा ळी ळु ळू ळे ळै ळो ळौ ळं ळः ळॅ ळॉ ळँ ऴ ळऽ ळ् ळृ ळॄ ळॢ ळॣ ळ॑ ळ॒ ळ॓ ळ॔ ळॢ़ ळॣ़ ळॠ ळॡ ळॢ ळॣ ळ० ळ१ ळ२ ळ३ ळ४ ळ५ ळ६ ळ७ ळ८ ळ९ ळ॰ ळॱ ळॲ ळॳ ळॴ ळॵ ळॶ ळॷ ळॸ ळॹ ळॺ ळॻ ळॼ ळॽ ळॾ ळॿ';

const bengaliAlphabet =
    'অ আ ই ঈ উ ঊ ঋ এ ঐ ও ঔ ক খ গ ঘ ঙ চ ছ জ ঝ ঞ ট ঠ ড ঢ ণ ত থ দ ধ ন প ফ ব ভ ম য র ল শ ষ স হ কা কি কী কু কূ কে কৈ কো কৌ গা গি গী গু গূ গে গৈ গো গৌ চা চি চী চু চূ চে চৈ চো চৌ জা জি জী জু জূ জে জৈ জো জৌ টা টি টী টু টূ টে টৈ টো টৌ ডা ডি ডী ডু ডূ ডে ডৈ ডো ডৌ ণা ণি ণী ণু ণূ ণে ণৈ ণো ণৌ তা তি তী তু তূ তে তৈ তো তৌ থা থি থী থু থূ থে থৈ থো থৌ দা দি দী দু দূ দে দৈ দো দৌ না নি নী নু নূ নে নৈ নো নৌ পা পি পী পু পূ পে পৈ পো পৌ ফা ফি ফী ফু ফূ ফে ফৈ ফো ফৌ বা বি বী বু বূ বে বৈ বো বৌ ভা ভি ভী ভু ভূ ভে ভৈ ভো ভৌ মা মি মী মু মূ মে মৈ মো মৌ যা যি যী যু যূ যে যৈ যো যৌ রা রি রী রু রূ রে রৈ রো রৌ লা লি লী লু লূ লে লৈ লো লৌ শা শি শী শু শূ শে শৈ শো শৌ ষা ষি ষী ষু ষূ ষে ষৈ ষো ষৌ সা সি সী সু সূ সে সৈ সো সৌ হা হি হী হু হূ হে হৈ হো হৌ ০১২৩৪৫৬৭৮৯';

const punjabiAlphabet =
    'ੳੳ, ੳਅ, ੳੲ ੳ ਅ ੲ ਸ ਹ ਕ ਖ ਗ ਘ ਙ ਚ ਛ ਜ ਝ ਞ ਟ ਠ ਡ ਢ ਣ ਤ ਥ ਦ ਧ ਨ ਪ ਫ ਬ ਭ ਮ ਯ ਰ ਲ ਵ ੜ.';

const tamilAlphabet =
    'அ ஆ இ ஈ உ ஊ எ ஏ ஐ ஒ ஓ ஔ க கா கி கீ கு கூ கெ கே கை கொ கோ கௌ ங ஙா ஙி ஙீ ஙு ஙூ ஙெ ஙே ஙை ஙொ ஙோ ஙௌ ச சா சி சீ சு சூ செ சே சை சொ சோ சௌ ஞ ஞா ஞி ஞீ ஞு ஞூ ஞெ ஞே ஞை ஞொ ஞோ ஞௌ ட டா டி டீ டு டூ டெ டே டை டொ டோ டௌ ண ணா ணி ணீ ணு ணூ ணெ ணே ணை ணொ ணோ ணௌ த தா தி தீ து தூ தெ தே தை தொ தோ தௌ ந நா நி நீ நு நூ நெ நே நை நொ நோ நௌ ப பா பி பீ பு பூ பெ பே பை பொ போ பௌ ம மா மி மீ மு மூ மெ மே மை மொ மோ மௌ ய யா யி யீ யு யூ யெ யே யை யொ யோ யௌ ர ரா ரி ரீ ரு ரூ ரெ ரே ரை ரொ ரோ ரௌ ல லா லி லீ லு லூ லெ லே லை லொ லோ லௌ வ வா வி வீ வு வூ வெ வே வை வொ வோ வௌ ழ ழா ழி ழீ ழு ழூ ழெ ழே ழை ழொ ழோ ழௌ ள ளா ளி ளீ ளு ளூ ளெ ளே ளை ளொ ளோ ளௌ ற றா றி றீ று றூ றெ றே றை றொ றோ றௌ ன னா னி னீ னு னூ னெ னே னை னொ னோ னௌ ா ி ீ ு ூ ெ ே ை ொ ோ ௌ ஸ ஹ க்ஷ ஜ்ஞ ஶ்ரொ ஸ்ரொ ஹ்ரொ';

const teleguAlphabet =
    'అ ఆ ఇ ఈ ఉ ఊ ఋ ౠ ఎ ఏ ఐ ఒ ఓ ఔ క ఖ గ ఘ ఙ చ ఛ జ ఝ ఞ ట ఠ డ ఢ ణ త థ ద ధ న ప ఫ బ భ మ య ర ల వ శ ష స హ ా ి ీ ు ూ ె ే ై ొ ో ౌ ం ః కా కి కీ కు కూ కృ కౄ కె కే కై కొ కో కౌ చా చి చీ చు చూ చె చే చై చొ చో చౌ జా జి జీ జు జూ జె జే జై జొ జో జౌ టా టి టీ టు టూ టె టే టై టొ టో టౌ డా డి డీ డు డూ డె డే డై డొ డో డౌ ణా ణి ణీ ణు ణూ ణె ణే ణై ణొ ణో ణౌ తా తి తీ తు తూ తె తే తై తొ తో తౌ దా ది దీ దు దూ దె దే దై దొ దో దౌ నా ని నీ ను నూ నె నే నై నొ నో నౌ పా పి పీ పు పూ పె పే పై పొ పో పౌ బా బి బీ బు బూ బె బే బై బొ బో బౌ మా మి మీ ము మూ మె మే మై మొ మో మౌ యా యి యీ యు యూ యె యే యై యొ యో యౌ రా రి రీ రు రూ రె రే రై రొ రో రౌ లా లి లీ లు లూ లె లే లై లొ లో లౌ వా వి వీ వు వూ వె వే వై వొ వో వౌ శా శి శీ శు శూ శె శే శై శొ శో శౌ షా షి షీ షు షూ షె షే షై షొ షో షౌ సా సి సీ సు సూ సె సే సై సొ సో సౌ హా హి హీ హు హూ హె హే హై హొ హో హౌ';

const japaneseAlphabet =
    'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん';

const koreanAlphabet = 'ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎㅏㅑㅓㅕㅗㅛㅜㅠㅡㅣ';

const chineseAlphabet = '一二三四五六七八九十百千万亿零壹贰叁肆伍陆柒捌玖拾佰仟萬億貮两';

const vietnameseAlphabet = 'aăâbcdđeêghiklmnoôơpqrstuưvxy';

const thaiAlphabet = 'กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤฤๅลฦฦๅวศษสหฬอฮ';

const laoAlphabet = 'ກຂຄງຈສຊຍດຕຖທນບປຜພຟມຢຣລວຫອຮ';

const burmeseAlphabet = 'ကခဂဃငစဆဇဈညဋဌဍဎဏတထဒဓနပဖဗဘမယရလဝသဟဠအ';

const khmerAlphabet = 'កខគឃងចឆជឈញដឋឌឍណតថទធនបផពភមយរលវសហឡ';

const alphabetMap = {
    englishAlphabet,
    greekAlphabet,
    russianAlphabet,
    arabicAlphabet,
    urduAlphabet,
    hebrewAlphabet,
    ethiopianAlphabet,
    hindiAlphabet,
    marathiAlphabet,
    bengaliAlphabet,
    punjabiAlphabet,
    tamilAlphabet,
    teleguAlphabet,
    japaneseAlphabet,
    koreanAlphabet,
    chineseAlphabet,
    vietnameseAlphabet,
    thaiAlphabet,
    laoAlphabet,
    burmeseAlphabet,
    khmerAlphabet,
};

const emojis = `Faces:
😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 😉 😌 😍 😘 😗 😙 😚 😋 😛 😜 😝 😎 🤓 🧐 😏 😒 😞 😔 😟 😕 🙁 ☹️ 😣 😖 😫 😩 😢 😭 😤 😠 😡 🤬 🤯 😳 🥺 😱 😨 😰 😥 🥵 🥶 😓 🤗 🤔 🤭 🤫 🤥 😶 😐 😑 😬 🙄 😯 😦 😧 😮 😲 🥴 🤤 😴 😪 😵 😇🤧 🤢 🤮 🤠 😷 🤒 🥴

Weather:
☀️ 🌤️ ⛅ 🌥️ 🌦️ 🌧️ ⛈️ 🌩️ 🌨️ 🌪️ 🌫️ 🌬️ 💨 🌈 ☔ 💧 💦 ☂️❄️ 🌁

Sports:
⚽ 🏀 🏈 ⚾ 🎾 🏐 🏉 🎱 🎳 🏏 🏑 🏒 🥍 🏓 🏸 🥊 🥋 🥇 🥈 🥉 🎯 🎿 🛷 🎣 🤿 🎽 🎖️ 🥌 🛼 🛹 🧗‍♂️ 🧗‍♀️ 🛸 🏹 🤺 🤾‍♂️ 🤾‍♀️ 🏋️‍♂️ 🏋️‍♀️ 🤸‍♂️ 🤸‍♀️ ⛹️‍♂️ ⛹️‍♀️ 🤷‍♂️ 🤷‍♀️ 🤼‍♂️ 🤼‍♀️ 🚴‍♂️ 🚴‍♀️ 🚵‍♂️ 🚵‍♀️ 🤔

Fruits:
🍏 🍎 🍐 🍊 🍋 🍌 🍍 🍇 🍈 🍉 🍒 🍓 🥭 🥥 🥦 🍅 🥑 🍆 🥔 🌶️ 🥗 🥚 🥓 🥩 🍗 🍖 🌭 🍔 🍟 🍕 🥪 🥙 🌮 🌯 🍝 🍜 🍲 🍛 🍣 🍱 🍤 🍥 🥮 🍢 🍡 🥟 🥠 🥡 🍦 🍧 🧁 🍰 🎂 🍮 🍭 🍬 🍫 🍩 🍪 🌰 🥜 🧂 🍯 🥛 ☕ 🍵 🍶 🍼 🥤 🍷 🥂 🍸 🍹 🍾 🍻 🥄 🍴 🍽️

Buildings:
🏠 🏡 🏢 🏣 🏤 🏥 🏦 🏨 🏩 🏪 🏫 🏬 🏭 🏯 🏰 💒 🗼 🗽 🏁 🏁 🏇 🏆 🏚️ 🏛️ 🏜️ 🏝️ 🏞️ 🏟️ 🏠 🏡 🏢 🏣 🏤 🏥 🏦 🏨 🏩 🏪 🏫 🏬 🏭 🏯 🏰 🏯 🗼 🗽

Transportation:
🚀 🛸 🛰️ 🚁 ✈️ 🛩️ 🛫 🛬 🚂 🚆 🚇 🚈 🚉 🚝 🚊 🚍 🚎 🚐 🚑 🚒 🚓 🚔 🚕 🚖 🚗 🚘 🚚 🚛 🚜 🏎️ 🏍️ 🛵 🦼 🛴 🚲 🛹 🛺 🚢 🛳️ 🛥️ 🚤 🛴 🛵 🛹 🛺 🚛 🛴 🚲 🚶‍♂️ 🚶‍♀️ 🏃‍♂️ 🏃‍♀️ 🏃‍♂️ 🏃‍♀️ 🚴‍♂️ 🚴‍♀️ 🚵‍♂️ 🚵‍♀️ 🚴‍♂️ 🚴‍♀️ 🚶‍♂️ 🚶‍♀️ 🏃‍♂️ 🏃‍♀️ 🏃‍♂️ 🏃‍♀️ 🚴‍♂️ 🚴‍♀️ 🚵‍♂️ 🚵‍♀️ 🚶‍♂️ 🚶‍♀️ 🏃‍♂️ 🏃‍♀️ 🏃‍♂️ 🏃‍♀️
🚥 🚦 🛑 🚧 ⚠️ 🚨 🚲 🛴 🛵 🚶‍♀️ 🚶‍♂️ 🚴‍♀️ 🚴‍♂️ 🚷 🚳 🚱 🚯 🚭 🚷 🚳 🚱 🚯 🚭 🛣️ 🛤️ 🛢️ 🛣️ 🚸 🔰 🚦 🚚 🚛 🚜 🚝 🚞 🚟 🚠 🚡 🚢 🚣‍♀️ 🚣‍♂️ 🚤 🛥️ 🛶 🚂 🚆 🚇 🚈 🚉 🚊 🚋

Animals:
🐶 🐱 🐭 🐹 🐰 🦊 🐻 🐼 🐨 🐯 🦁 🐮 🐷 🐽 🐸 🐵 🙊 🙉 🙈 🐒 🦍 🦧 🐔 🐧 🐦 🐤 🐣 🐥 🦆 🦢 🦉 🦚 🦜 🦔 🦝 🐺 🐗 🦌 🐴 🦓 🦄 🐝 🐛 🦋 🐌 🐞 🐜 🦗 🕷️ 🕸️ 🦂 🦟 🦠 🦀 🦑 🐍 🐢 🐊 🐋 🦈 🐬 🐳 🐋 🐟 🐠 🐡 🦐 🦞 🦑 🐙 🦦 🦚 🦜 🦢 🦉 🦩 🦧 🐆 🦨 🦥 🦮 🐘 🦏 🦍 🐪 🐫 🦙 🦌 🐃 🐂 🐄 🐎 🐖 🐏 🐑 🦙 🐐 🦚 🦘 🦌 🐎 🐖 🦙 🐐 🦚 🐕 🦮 🐕 🐩 🦔 🐈 🐾 🐇 🦜 🦙 🦔 🦝 🦡 🦢 🦚

trees:
🌲 🌳 🌴 🌵 🌾 🌿 ☘️ 🍀 🍁 🍂 🍃 🍄 🌰 🦀 🦑 🐙 🦐 🦞

Currency Symbols:
💲 💰 💴 💵 💶 💷 💸 💱 💹 💱 💴 💶 💷 💸 💹 💱 💴 💵 💶 💷 💸 💹 🔯 💠 🔷 🔶 🔸 🔹 🔺 🔻

zodiac and more:
♈ ♉ ♊ ♋ ♌ ♍ ♎ ♏ ♐ ♑ ♒ ♓ ⛎ 🌛 🌝 🌜 🌚 🌕 🌖 🌗 🌘 🌑 🌒 🌓 🌔 🌙 🌎 🌍 🌏 🌋 🌌 🌠 ⭐ 🌟 💫 ✨ ☄️ ☀️ 🌤️ ⛅ 🌥️ 🌦️ 🌧️ ⛈️ 🌩️ 🌨️ 🌪️ 🌫️ 🌬️ 💨 🌈 ☔ 💧 💦 ☂️❄️ 🌁 
`;
const symbols = `
Currency Symbols:
₿ ¢ ₡ ₵ ¤ ₫ € ƒ ₣ ₲ ₴ ₭ ₺ ₥ ₦ ₱ £ ৲ ৳ ₹ ₨ ₪ ₩ ¥ ₲₽₿₴₸

Mathematical Symbols:
∀∂∃∅∇∈∉∋∌∏∑−±∓∕∗∘∙√∝∞∠∡∢∥∦∧∨∩∪∫∮∰∴∵∶∷∼∽∾∿≀≃≅≈≋≤≥≦≧≨≩≪≫≬≭≮≯≰≱≲≳≴≵≶≷≸≹≺≻≼≽≾≿⊀⊁⊆⊇⊈⊉⊊⊋⊏⊐⊑⊒⊓⊔⊕⊖⊗⊘⊙⊚⊛⊜⊝⊞⊟⊠⊡⊢⊣⊤⊥⊦⊧⊨⊩⊪⊫⊬⊭⊮⊯⊰⊱⊲⊳⊴⊵⊶⊷⊸⊹⊺⊻⊼⊽⊾⊿⋀⋁⋂⋃⋄⋅⋆⋇⋈⋉⋊⋋⋌⋍⋎⋏⋐⋑⋒⋓⋔⋕⋖⋗⋘⋙⋚⋛⋜⋝⋞⋟⋠⋡⋢⋣⋤⋥⋦⋧⋨⋩⋪⋫⋬⋭⋮⋯⋰⋱⋲⋳⋴⋵⋶⋷⋸⋹⋺⋻⋼⋽⋾⋿⌀⌁⌂⌃⌄⌅⌆⌇⌈⌉⌊⌋⌌⌍⌎⌏⌐⌑⌒⌓⌔⌕⌖⌗⌘⌙ ⎛⎜⎝⎞⎟⎠⎡⎢⎣⎤⎥⎦⎧⎨⎩⎪⎫⎬⎭⎮ ⌜⌝⌞⌟⌠⌡⌢⌣⌤⌥⌦⌧
∮ E⋅da = Q,  n → ∞, ∑ f(i) = ∏ g(i), ∀x∈ℝ: ⌈x⌉ = −⌊−x⌋, α ∧ ¬β = ¬(¬α ∨ β),

ℕ ⊆ ℕ₀ ⊂ ℤ ⊂ ℚ ⊂ ℝ ⊂ ℂ, ⊥ < a ≠ b ≡ c ≤ d ≪ ⊤ ⇒ (A ⇔ B),

2H₂ + O₂ ⇌ 2H₂O, R = 4.7 kΩ, ⌀ 200 mm

Miscellaneous Symbols:
© ® ™ † ‡ § ¶ ¶ ª º ° µ ¹ ² ³ № ¼ ½ ¾ ¿ ¡ ˆ ˜ ¯ ˘ ˙ ˚ ˛ ˝
⠀⠁⠂⠃⠄⠅⠆⠇⠈⠉⠊⠋⠌⠍⠎⠏⠐⠑⠒⠓⠔⠕⠖⠗⠘⠙⠚⠛⠜⠝⠞⠟⠠⠡⠢⠣⠤⠥⠦⠧⠨⠩⠪⠫⠬⠭⠮⠯⠰⠱⠲⠳⠴⠵⠶⠷⠸⠹⠺⠻⠼⠽⠾⠿⡀⡁⡂⡃⡄⡅⡆⡇⡈⡉⡊⡋⡌⡍⡎⡏⡐⡑⡒⡓⡔⡕⡖⡗⡘⡙⡚⡛⡜⡝⡞⡟⡠⡡⡢⡣⡤⡥⡦⡧⡨⡩⡪⡫⡬⡭⡮⡯⡰⡱⡲⡳⡴⡵⡶⡷⡸⡹⡺⡻⡼⡽⡾⡿⢀⢁⢂⢃⢄⢅⢆⢇⢈⢉⢊⢋⢌⢍⢎⢏⢐⢑⢒⢓⢔⢕⢖⢗⢘⢙⢚⢛⢜⢝⢞⢟⢠⢡⢢⢣⢤⢥⢦⢧⢨⢩⢪⢫⢬⢭⢮⢯⢰⢱⢲⢳⢴⢵⢶⢷⢸⢹⢺⢻⢼⢽⢾⢿⣀⣁⣂⣃⣄⣅⣆⣇⣈⣉⣊⣋⣌⣍⣎⣏⣐⣑⣒⣓⣔⣕⣖⣗⣘⣙⣚⣛⣜⣝⣞⣟⣠⣡⣢⣣⣤⣥⣦⣧⣨⣩⣪⣫⣬⣭⣮⣯⣰⣱⣲⣳⣴⣵⣶⣷⣸⣹⣺⣻⣼⣽⣾⣿˙

Box drawing alignment tests:                                          █
                                                                      ▉
  ╔══╦══╗  ┌──┬──┐  ╭──┬──╮  ╭──┬──╮  ┏━━┳━━┓  ┎┒┏┑   ╷  ╻ ┏┯┓ ┌┰┐    ▊ ╱╲╱╲╳╳╳
  ║┌─╨─┐║  │╔═╧═╗│  │╒═╪═╕│  │╓─╁─╖│  ┃┌─╂─┐┃  ┗╃╄┙  ╶┼╴╺╋╸┠┼┨ ┝╋┥    ▋ ╲╱╲╱╳╳╳
  ║│╲ ╱│║  │║   ║│  ││ │ ││  │║ ┃ ║│  ┃│ ╿ │┃  ┍╅╆┓   ╵  ╹ ┗┷┛ └┸┘    ▌ ╱╲╱╲╳╳╳
  ╠╡ ╳ ╞╣  ├╢   ╟┤  ├┼─┼─┼┤  ├╫─╂─╫┤  ┣┿╾┼╼┿┫  ┕┛┖┚     ┌┄┄┐ ╎ ┏┅┅┓ ┋ ▍ ╲╱╲╱╳╳╳
  ║│╱ ╲│║  │║   ║│  ││ │ ││  │║ ┃ ║│  ┃│ ╽ │┃  ░░▒▒▓▓██ ┊  ┆ ╎ ╏  ┇ ┋ ▎
  ║└─╥─┘║  │╚═╤═╝│  │╘═╪═╛│  │╙─╀─╜│  ┃└─╂─┘┃  ░░▒▒▓▓██ ┊  ┆ ╎ ╏  ┇ ┋ ▏
  ╚══╩══╝  └──┴──┘  ╰──┴──╯  ╰──┴──╯  ┗━━┻━━┛           └╌╌┘ ╎ ┗╍╍┛ ┋  ▁▂▃▄▅▆▇█


`;

const div = document.createElement('div');

const elem = document.getElementById('test_res');

function testAlphabet() {
    for (let key in alphabetMap) {
        let val = testData(alphabetMap[key]);
        elem.innerHTML += `<p>${key}<br/>${val}</p>`;
    }
}

function testEmojis() {
    let val = testData(emojis);
    elem.innerHTML += `<p>emojis<br/>${val}</p>`;
}

function testSymbols() {
    let val = testData(symbols);
    elem.innerHTML += `<p>symbols<br/>${val}</p>`;
}

testAlphabet();
testEmojis();
testSymbols();