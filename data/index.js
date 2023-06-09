import Category from "../models/category";
import Product from "../models/product";

export const CATEGORIES = [
  new Category(
    "c1",
    "Học Nấu Món Xào",
    require("../data/images/category/c1.png")
  ),
  new Category(
    "c2",
    "Học Nấu Món Lẩu",
    require("../data/images/category/c2.png")
  ),
  new Category(
    "c3",
    "Học Nấu Món Kho",
    require("../data/images/category/c3.png")
  ),
  new Category(
    "c4",
    "Học Nấu Món Chiên",
    require("../data/images/category/c4.png")
  ),
  new Category(
    "c5",
    "Học Nấu Món Bún",
    require("../data/images/category/c5.png")
  ),
  new Category(
    "c6",
    "Học Nấu Món Canh",
    require("../data/images/category/c6.png")
  ),
  new Category(
    "c7",
    "Học Nấu Món Xào",
    require("../data/images/category/c1.png")
  ),
  new Category(
    "c8",
    "Học Nấu Món Lẩu",
    require("../data/images/category/c2.png")
  ),
];

export const PRODUCTS = [
  new Product(
    "m1",
    "c1",
    "Cách xào lòng lợn với dưa cải chua không đắng, đậm đà hao cơm",
    require("../data/images/meal/m1.png"),
    130,
    67,
    "Lòng lợn xào dưa cải chua là sự kết hợp không chỉ từ hương vị chua chua nhờ cải chua. Món xào đặc biệt này còn mang tới cho thực khách một cảm nhận hoàn toàn mới lạ, khác hẳn so với các món ăn cổ truyền được chế biến từ lòng lợn, và bây giờ các bạn hãy chuẩn bị nguyên liệu để cùng vào bếp thực hành chế biến món xào này ",
    "1 bộ lòng non\n1 bát dưa chua/\n1 chút hành lá\n1 củ hành tím\n1-2 quả cà chua\n1 chút tỏi\n1 thìa nước mắm\n1 chút bột nêm, bột ngọt, tiêu\n1 nhánh gừng\nỚt vừa ăn\nDầu ăn",
    "– Bước 1: Lấy một mẩu gừng cho vào đầu lòng non để lọt vào trong, vuốt cho miếng gừng chạy dọc từ đầu này qua đầu kia. Sau đó bóp lòng với 1 chút giấm, muối rồi rửa lại cho sạch.\n– Bước 2: Đổ nước vào nồi đun sôi cùng với 1 nhánh gừng đập dập, 1 chút muối cho nước sôi mới cho lòng heo luộc trong 30 giây là vớt ngay. Thả lòng vào chén nước lạnh ngâm trong 30 phút cho nguội và lòng được trắng giòn.\n– Bước 3: Tiếp theo, bạn rửa sạch cà chua, cắt bỏ núm và thái múi cau. Hành tỏi băm nhỏ, hành lá thái khúc.\n– Bước 4: Vớt lòng non ra cho ráo nước rồi thái miếng dài chừng 2 đốt ngón tay.\n– Bước 5: Đặt chảo lên bếp, cho vào 2 thìa dầu ăn, khi dầu đã bắt đầu nóng thì cho tỏi, hành phi thơm vàng, cho cà chua vào xào, nêm thêm chút muối cho cà chua chín mềm.\n– Bước 6: Sau đó, bạn cho dưa chua vào xào sơ qua rồi cho chút lòng nong vào, nêm thêm với gia vị gồm: mắm, ớt, tiêu, hạt nêm, bột ngọt cho vừa miệng. Bạn dùng đũa đảo đều, rắc thêm hành lá lên trên là hoàn thành món ăn rồi."
  ),
  new Product(
    "m2",
    "c1",
    "Hướng Dẫn Cách Xào Cà Tím Chuẩn Vị Đậm Đà Ngon Ngất Ngây",
    require("../data/images/meal/m2.png"),
    150,
    122,
    "Ngoài các loại rau củ như cà rốt, khoai tây, bí đỏ… thì cà tím là loại nguyên liệu được khá nhiều chị em yêu thích và chọn lựa. Bên cạnh những món như cà tím chiên, kho, thì cà tím xào thịt và xào tỏi là 2 món ăn vừa đơn giản dễ làm lại vô cùng ngon miệng",
    "2 quả cà tím\n100g thịt nạc vai\nGừng\n2 tép tỏi\n2 cây hành lá",
    "Bước 1: Sơ chế Cà tím khi mua về, bạn cắt miếng vừa ăn, rồi cho vào ngâm trong chậu nước có pha chút muối để cà không bị thâm đen. Ngâm cà trong khoảng 10 phút rồi vớt ra để ráo nước.\nTỏi bóc vỏ, băm nhỏ.\nHành lá rửa sạch, cắt nhỏ.\nGừng gọt sạch, một phần cắt sợi, một phần băm nhỏ.\nThịt heo khi mua về, rửa sạch rồi băm nhỏ. Tiếp đến, đem ướp thịt với chút muối, gừng băm nhỏ và ít rượu. Sau đó, trộn đều rồi để khoảng 10 phút cho thấm gia vị. Tiếp theo, bạn làm nóng chảo, cho vào ít tỏi băm phi thơm, rồi cho thịt heo vào xào đến khi thấy thịt chuyển sang màu trắng thì cho thịt ra bát riêng.\nBước 2: Chiên cà tím\n– Bạn làm nóng chảo, rồi cho dầu ăn vào, chờ dầu nóng thì cho cà tím đã ráo nước vào chảo chiên thật nhanh trong 2 – 3 phút rồi vớt ra. Sau đó, bạn tiếp tục cho cà vào nồi nước đang sôi luộc thêm khoảng 3 phút nữa rồi vớt ra rổ, để ráo. Đây là bí quyết giúp cà tím khi xào có độ săn, bóng và không bám nhiều dầu trong quá trình chế biến.\nBước 3: Xào cà tím với thịt\n– Tiếp tục phi thơm tỏi với dầu ăn, rồi cho gừng cắt sợi vào xào thơ. Sau đó, cho cà tím cùng thịt băm vào xào đều.\nBước 4: Nêm nếm\n– Xào khoảng 3 phút, bạn nêm nếm cà tím xào thịt với 1 muỗng đường, ½ muỗng cà phê dầu mè, 1 muỗng hạt nêm rồi trộn đều cho vừa ăn. Cuối cùng, bạn rắc hành lá cắt nhỏ lên trên, rồi tắt bếp và cho món ăn ra đĩa."
  ),
  new Product(
    "m3",
    "c1",
    "Cách làm bạch tuột xào đậm vị cho bữa cơm thêm hấp dẫn",
    require("../data/images/meal/m3.png"),
    100,
    50,
    "Bạch tuột có vị giòn giòn, tươi ngọt có thể chế biến thành nhiều món ăn hấp dẫn, đậm đà. Do đó, đây là nguyên liệu được rất nhiều các chị em nội trợ yêu thích",
    "Nguyên liệu bạch tuột xào chua ngọt\n1kg bạch tuột\n1 quả cà chua\n1 củ hành tây\nRau cần, tỏi\nChanh\nDầu ăn, hạt nêm, đường, bột ngọt",
    "Cách làm bạch tuột xào chua ngọt/Bước 1: Sơ chế – Bạch tuột khi mua về, bạn sơ chế như trên rồi cắt bạch tuột thành từng miếng vừa ăn.\n– Cà chua bạn đem rửa sạch, cắt múi cau.\n– Hành tây bóc vỏ cắt múi cau.\n– Rau cần rửa sạch cắt khúc.\n– Tỏi bóc vỏ, đập dập.\nBước 2: Xào bạch tuột\n– Bạn cho chảo lên bếp, cho dầu ăn và tỏi vào phi thơm, rồi cho bạch tuột vào. Nêm nếm với hạt nêm, bột ngọt rồi xào săn rồi trút ra đĩa, không nên xào chín.\nBước 3: Xào rau củ\n– Bạn cho chảo lên bếp, cho dầu ăn và tỏi vào phi thơm. Tiếp đến, bạn cho cà chua, hành tây vào xào đều. Khi nguyên liệu vừa chín tới, bạn cho bạch tuột đã xào sơ vào rồi nêm nếm cho vừa miệng. Rồi cho cần tây vào xào khoảng 5 phút thì tắt bếp\nBước 4: Làm nước xốt và hoàn thành món bạch tuột xào chua ngọt\n– Bạn cho nước cốt chanh, đường, nước mắm, bột ngọt vào chén, khuấy đều cho gia vị tan hẳn. Tiếp theo, cho từ từ bột năng hòa tan với nước vào rồi khuấy đều lên. Sau đó, bạn cho hỗn hợp này vào nồi và nấu đến khi món ăn sền sệt và có màu đẹp mắt. Vậy là hoàn thành món bạch tuột xào chua ngọt rồi đấy!"
  ),
  new Product(
    "m4",
    "c1",
    "“Bí Kíp” Làm Măng Tây Xào Thịt Bò Thơm Ngon Bổ Dưỡng Cho Gia Đình",
    require("../data/images/meal/m4.png"),
    140,
    88,
    "Những ngày bận bịu công việc mà vẫn muốn tự tay làm cơm cho gia đình thì bạn nên chọn món ăn gì? Măng tây xào thịt bò là một gợi ý phù hợp, vừa chế biến đơn giản vừa cung cấp đầy đủ chất dinh dưỡng cho cả nhà. Vậy để hiểu rõ hơn về món ăn này cũng như cách chế biến thì bạn đừng bỏ qua bài viết sau nhé!",
    "Măng tây: 300g\nThịt thăn bò: 200g\nTỏi băm: 1 muỗng canh\nDầu ăn: 1 muỗng canh\nGia vị: đường, muối, tiêu, bột nêm,…",
    "Cách thực hiện\nBước 1: Sơ chế Thịt bò sau khi mua về đem rửa sạch, thái miếng mỏng. Sau đó cho vào tô ướp với 1 thìa cafe dầu ăn, ½ thìa cafe tiêu, ½ thìa cafe hạt nêm và 1 chút tỏi băm. Trộn đều và để khoảng 20 phút cho thịt thấm gia vị.\nChọn mua những cây măng tây non, màu xanh nhạt thì khi xào mới giòn và không bị xơ. Bỏ phần gốc già và bào vỏ thật mỏng khoảng 1/3 thân măng tính từ gốc trở lên, còn phần ngọn giữ nguyên. Ngâm với nước muối pha loảng để loại bỏ đất cát, rửa lại với nước sạch và để ráo sau đó cắt thành từng đoạn dài khoảng 5-7cm.\nBước 2: Chế biến\nĐầu tiên, bạn nấu nước để luộc sơ măng tây, thêm đường vào nồi với tỉ lệ 1 lít nước tương ứng 5g đường. Công đoạn này giúp măng tây sau khi xào vừa giữ được màu xanh vừa giòn, ngọt. Khi nước sôi, bạn cho măng tây vào và đậy nắp. Luộc măng tây trong 1 phút thì vớt ra và cho vào nước đá sau đó để ráo.\nTiếp theo, bạn cho dầu ăn vào chảo rồi phi thơm tỏi băm, xào thịt bò nhanh tay với lửa lớn. Khi thịt bò săn lại thì bạn cho ra dĩa, phần nước ngọt tiết ra vẫn để lại trong chảo. Tiếp tục cho măng tây vào xào, nêm nếm gia vị vừa miệng. Khi măng gần chín thì cho thịt bò vào và xào đều tay thêm 2 phút thì tắt bếp.\nBước 3: Trình bày và thưởng thức\nCho thành phẩm ra dĩa, rắc một chút tiêu xay lên trên để tăng hương vị, thưởng thức khi còn nóng và ăn cùng cơm trắng sẽ rất ngon. Món ăn đạt chuẩn khi vẫn  giữ được độ mềm của thịt bò, màu xanh và độ giòn của măng tây cùng hương vị vừa miệng."
  ),
  new Product(
    "m5",
    "c1",
    "Công Thức Làm Cua Rang Me Tại Nhà “Ngon Khó Cưỡng”",
    require("../data/images/meal/m5.png"),
    223,
    130,
    "Cua là một trong những loại hải sản được rất nhiều người yêu thích. Loại thực phẩm này không chỉ dễ tìm mua, có cách chế biến đa dạng mà còn chứa rất nhiều dưỡng chất có lợi cho sức khỏe.",
    "1 con cua biển\n200 gram me\n5 gram ớt băm\n50 gram tỏi băm\n50 gram gừng băm\n100 gram bột chiên giòn\n50 gram hành tím\n100 gram sả băm\n15 gram bột bắp\nCác loại gia vị: đường, bột ngọt, muối, tiêu, …\nRau răm",
    "Thực hiện\nBước 1: Sơ chế, ướp cua\nSau khi rửa sạch cua, bạn dùng dao có mũi nhọn đâm vào dưới yếm cua đến khi cua ngừng hoạt động. Sau đó, dùng kéo tách mai, cắt thân cua ra làm 4 phần vừa ăn. Tiếp theo, cho hạt nêm, tiêu, bột ngọt, muối, tím băm và tỏi băm vào cua để ướp trong khoảng 10 – 15 phút.\nBước 2: Chiên cua\nSau khi cua thấm gia vị, bạn nhúng cua vào bột chiên giòn sao cho phần bột bám đều vào thịt cua, trừ phần chân cua. Bỏ cua vào chảo dầu ăn đang nóng, chiên giòn trên lửa lớn. Vớt cua ra cho vào đĩa cho ráo dầu.\nBước 3: Nấu xốt me\nCho hành tím, sả, tỏi và gừng vào nồi và phi cho thơm, sau đó đó đổ nước sôi cùng ớt hột. xác me vào nấu chung. Tiếp theo, bạn cho bột ngọt, đường, muối, nước mắm vào hỗn hợp trên, khuấy đều cho gia vị hòa tan đều. Sau cùng, thêm bột bắp và nước vào, tiếp tục khuấy đều cho đến khi xốt sệt lại.\nBước 4: Rang cua với xốt me\nCho cua vào phần xốt vừa mới pha, sau đó rang trên lửa lớn. Trong lúc rang, bạn có thể thêm ớt bột hoặc sa tế tùy ý nếu muốn ăn cay. Để cho sốt sôi lại thì tắt bếp và có thể gắp ra dĩa để dùng cua ra dĩa, trang trí kèm với rau răm."
  ),
  new Product(
    "m6",
    "c1",
    "Mách Bạn Cách Làm Mì Ý Đơn Giản, Chuẩn Vị Tại Nhà",
    require("../data/images/meal/m6.png"),
    180,
    60,
    "Mì Ý là một ăn đặc trưng của ẩm thực phương Tây nhưng hiện nay đã rất phổ biến và được yêu thích tại Việt Nam. Công thức của món ăn không rườm rà như bạn vẫn hay nghĩ. Hãy học ngay cách làm mì Ý dưới đây để tự tay chuẩn bị cho gia đình thưởng thức nhé!",
    "Chuẩn bị Mì Spaghetti: 300g\nThịt bò: 300g\nHành tây: 1 củ\nCần tây: 50g\nCà chua: 200g (2-3 quả)\nXốt cà chua: 250g\nDầu olive: 20ml\nTỏi băm:  1 muỗng café\nBơ thực vật: 15g\nGia vị: muối, đường, tiêu, hạt nêm, dầu ăn",
    "Quy trình thực hiện\nBước 1: Sơ chế nguyên liệu tươi sống\nThịt bò rửa sạch rồi đem đi băm nhỏ hoặc xay nhuyễn, sau đó ướp với các gia vị hạt nêm, đường, dầu olive, tỏi băm trong 15-20 phút để thấm gia vị.\nCà chua, hành tây, cần tây rửa sạch với nước muối pha loãng. Để lột vỏ cà chua dễ dàng bạn luộc sơ rồi bỏ hạt và băm nhuyễn. Hai nguyên liệu còn lại thái hạt lựu nhỏ, để riêng từng phần.\nBước 2: Luộc mì\nĐun sôi nước, cho 1 muỗng cafe muối vào để mì sau khi luộc có màu vàng bóng và đậm vị hơn. Khi nước sôi, bạn cho mì từ từ vào luộc, sau khoảng 1 phút sợi mì mềm ra và ngập trong nước. Lúc này, dùng đũa đảo nhẹ để mì không dính vào nhau. Luộc thêm 8 -10 phút, khi mì chín hẳn thì bạn vớt ra, rửa sơ qua nước lạnh để mì dai, cho thêm 1 muỗng dầu ăn và trộn đều để sợi mì không bị dính lại với nhau.\nBước 3: Làm nước xốt\nLàm nóng chảo với một chút dầu olive rồi phi thơm tỏi và hành tây. Sau đó cho cần tây, cà chua vào xào, khi thấy nguyên liệu chín mềm thì tiếp tục thêm xố cà chua có sẵn vào nấu. Hỗn hợp sôi thì bạn thêm thịt bò vào đảo đều, nêm nếm gia vị cho vừa miệng thì đậy nắp, nấu hỗn hợp xốt với lửa nhỏ trong khoảng 20 phút thì tắt bếp\nBước 4: Trình bày\nBạn dùng nĩa xoắn mì thành những cuộn tròn ra dĩa và cho phần xốt cà chua thịt bằm đã chuẩn bị lên trên. Bạn có thể cho thêm chút phô mai sợi, lá húng quế để trang trí. Yêu cầu thành phẩm là sợi mì dai, không nát; phần xốt hòa quyện gia vị giữa thịt bò và cà chua, không bị quá chua hoặc quá mặn."
  ),
  new Product(
    "m7",
    "c2",
    "Cách Nấu Lẩu Thái Hải Sản Chua Cay, Đậm Đà Đơn Giản Tại Nhà",
    require("../data/images/meal/m7.png"),
    155,
    54,
    "Những buổi bạn bè họp mặt hay tối cuối tuần gia đình sum vầy thì ăn gì sẽ thích hợp nhất nhỉ? Lẩu Thái chua chua, cay cay, giàu chất đạm và cũng rất nhiều chất xanh sẽ là lựa chọn hàng đầu đấy",
    "Nguyên liệu nấu lẩu thái chua cay\nCải thảo: 1kg\nSắp: 2 trái\nNấm rơm: 500 gram\nĐậu phụ: 0.5kg\nThịt bò: 1kg\nTôm sú tươi: 1kg\nCá viên: 800 gram\nMì ăn liền hoặc miến, bún\nRau các loại",
    "Các bước thực hiện nấu lẩu Thái\nBước 1: Bắp lột vỏ, bỏ sạch râu, rửa sạch rồi cắt khúc tầm 3cm. Cải thảo tách lá, rửa sạch rồi cắt miếng nhỏ, mỗi miếng dài tầm 4cm.\nBước 2: Nấm rửa sạch, cắt miếng vừa ăn. Rau các loại đem ngâm với nước muối loãng rồi rửa sạch, thái khúc nhỏ.\nBước 3: Đậu phụ cắt thành 9 miếng nhỏ. Thịt bò rửa sạch, thái lát càng mỏng càng tốt. Tôm bỏ đuôi, đầu.\nBước 4: Cho 1 muỗng cà phê gia vị tom yum, 2 muỗng cà phê đường, 2 muỗng canh nước tương, 1 muỗng cà phê dầu mè cùng ít ớt tươi thái nhỏ, hạt mè rang vào chung một bát rồi trộn đều.\nBước 5: Cà chua rửa sạch, thái múi cau. Riềng, sả, lá chanh, ớt, hành tây cắt miếng nhỏ.\nBước 6: Chuẩn bị một nồi lớn, đổ nước hầm gà hoặc heo vào rồi cho lên bếp đun sôi. Khi nước sôi, bạn cho riềng, ớt, lá chanh, sả, hành tây, cà chua đã được sơ chế vào nồi.\nBước 7: Cho 2 muỗng cà phê gia vị lẩu Thái, 4 – 6 muỗng canh nước mắm và nước cốt của một quả chanh vào nồi. Sau đó, nêm nếm gia vị vừa miệng rồi đậy nắp đun sôi.\nBước 8: Bạn đổ nước dùng ra một nồi lẩu chuyên dụng hoặc nồi nhỏ và sử dụng bếp ga mini rồi dọn ra cùng với các nguyên liệu ăn kèm đã được sơ chế.\nBước 9: Bạn cho bắp vào đầu tiên để nước dùng thêm ngọt. Sau đó nhúng các nguyên liệu bạn thích vào và bắt đầu thưởng thức lẩu Thái thơm ngon, nóng hổi."
  ),
  new Product(
    "m8",
    "c2",
    "Dân dã với cách nấu lẩu cua đồng miền Tây - miền Nam ngon nhất",
    require("../data/images/meal/m8.png"),
    200,
    130,
    "Với hương vị dân dã đặc trưng mà vẫn đậm đà độc đáo, lẩu cua đồng luôn đem đến cho người thưởng thức một trải nghiệm ẩm thực thú vị. Đây cũng là món ăn mà bạn không nên bỏ qua trong cẩm nang nội trợ của mình.",
    "Nguyên liệu cần chuẩn bị\n700gr cua đồng\n500gr bắp bò\n500gr xương ống\n5 – 6 quả sấu xanh\n4 bìa đậu phụ\n4 quả cà chua\n1/2 bát con dấm bỗng\n10 củ hành khô\n2 củ gừng\nRau để nhúng lẩu: Rau xà lách hoặc rau diếp, kinh giới, hoa chuối, tía tô hoặc tùy thuộc vào sở thích của bạn.\nDầu ăn, gia vị",
    "Bước 1: Chế biến nước dùng lẩu\n– Đặt vỉ nướng lên bếp gas, để lửa vừa phải, nướng xém vỏ nhánh gừng nhỏ và từ 3 – 4 củ hành khô giúp cho gia tăng hương vị. Nướng xong, bạn dùng dao để bóc vỏ rồi đem rửa sạch. Đập dập gừng và hành rồi để riêng.\n– Xương ống mua về rửa sạch, chần xương qua nước vừa đun sôi, vớt xương ra và rửa lại với nước sạch. Tiếp theo, cho xương cùng gừng và hành khô đã được đập dập ở trên vào nồi, nêm vào từ 2 – 3 thìa canh muối, hạt nêm với khoảng 1 – 1.5 lít nước.\n– Nếu bạn sử dụng nồi áp suất, ninh trong thời gian khoảng 25 – 30 phút là được. Nếu sử dụng bằng bếp gas bình thường, chú ý không để lửa lớn vì nước dùng sẽ không được trong.\nBước 2: Cách sơ chế cua đồng\n– Cua đồng khi mua về đổ vào trong nồi nhỏ, xóc đều với muối hạt để làm sạch rồi rửa lại cua nhiều lần với nước. Tiếp đó, bạn tách bỏ phần mai cua, gạt gạch từ cua vào một bát nhỏ. Phần thịt cua còn lại đem giã nhuyễn ở cối.\n– Hòa cua mới xay trên chung khoảng từ 1 – 1.5 lít nước sạch. Tiếp theo, bạn sử dụng một chiếc rây nhỏ để lọc nước cua và bỏ phần bã đi.\nBước 3: Chiên đậu hũ\n– Rửa sạch, cắt đậu thành từng miếng nhỏ vừa ăn rồi để thật ráo nước.\n– Đun nóng dầu trong chảo rồi cho đậu phụ vào chiên. Chú ý rán đều tay với lửa to để đậu được vàng đều và giòn rụm.\nBước 4: Ướp thịt bò\n– Gọt sạch vỏ gừng, rửa sạch, có thể đập dập hoặc cũng có thể thái con chì tùy thích.\n– Ướp thịt bò với 1 thìa canh gia vị rồi trộn đều, để trong khoảng 20 phút trước khi ăn vì để lâu thịt sẽ bị thâm.\nBước 5: Chuẩn bị rau để nhúng lẩu\n– Rau xà lách và một số loại rau khác khi mua về bạn nhặt bỏ gốc rồi rửa sạch, để ráo.\n– Cà chua rửa sạch, bổ theo hình múi cau, chú ý bạn không nên thái cà chua quá mỏng. Sấu xanh đem rửa sạch rồi nạo vỏ. Hành khô đập dập hoặc thái mỏng tùy theo sở thích.\nBước 6: Hoàn thành và thưởng thức\n Tiếp đó bạn bắc nồi lẩu đã được chuẩn bị trên lên bếp ga, đổ nước dùng xương đã được ninh ở trên khoảng đầy 1/2 nồi. Tiếp tục đổ bát nước cua xay đã được lọc vào đầy nồi. Cho thêm cà chua cùng sấu và dấm bỗng vào, nêm gia vị vừa ăn, chú ý đun nhỏ lửa để tránh gạch cua bị vỡ nát.\n– Trong khi chờ nước lẩu sôi, bạn phi thơm hành khô trong chảo nóng. Chờ hành khô đã dậy mùi thơm thì nhanh tay tắt lửa và đổ bát gạch cua vào, dùng đũa khuấy nhẹ. Đổ gạch cua đã được phi thơm vào trong nồi nước dùng mới sôi lăn tăn, bạn có thể vớt gạch ra riêng một chiếc bát, khi nào ăn thì thả lại vào trong."
  ),
  new Product(
    "m9",
    "c2",
    "Cách Nấu Lẩu Gà Lá É, Cả Nhà Hít Hà Ngon Ơi Là Ngon",
    require("../data/images/meal/m9.png"),
    320,
    200,
    "Lẩu gà lá é là món ăn khá quen thuộc vào các dịp lễ, họp mặt bạn bè, liên hoan cuối tuần của nhiều gia đình. Vị hơi the the và thơm nồng của lá é quyện với vị ngọt của thịt gà mang đến một hương vị vừa mới lạ vừa khó quên nơi đầu lưỡi.",
    "1 con gà ta khoảng 1 – 1,5kg\n300g lá é\n200g nấm bào ngư\n300g măng tươi\nSả, ớt, tỏi, hành khô\nBún\nDầu ăn, hạt nêm, đường, muối, tiêu, dầu ăn",
    "Cách nấu\nBước 1 : Sơ chế Để món lẩu gà lá é được ngon, trước tiên bạn phải chọn loại gà ta, thịt chắc ngọt. Gà ta khi mua về, bạn làm sạch, rồi dùng muối chà xát khắp thân gà để khi luộc lên da gà sẽ giòn ngon hơn. Tiếp theo, bạn rửa sạch và chặt gà thành từng miếng vừa ăn.\nLá é khi mua về bạn nhặt sạch, bỏ gốc rồi ngâm với nước muối pha loãng, sau đó rửa sạch với nước. Tiếp theo, bạn lấy ½ lá é giã nhuyễn, ½ cắt khúc.\nMăng tươi bạn đem ngâm với nước 10 phút cho sạch rồi chần sơ măng qua nước sôi. Sau đó, bạn xé măng thành từng miếng nhỏ.\nNấm bào ngư bạn đem rửa sạch và xé nhỏ.\nỚt bạn rửa sạch, một ít đem giã nhuyễn, một ít đem thái lát để nước lẩu có vị cay cay nhẹ.\nSả bạn đem đập dập, cắt khúc.\nTỏi bóc vỏ, băm nhỏ.\nBước 2 : Cách ướp thịt gà\nĐể có nồi lẩu gà lá é ngon đúng chuẩn, thì cách ướp thịt gà là khâu vô cùng quan trọng. Bởi ướp gà sẽ làm ảnh hưởng đến vị ngọt và độ đậm đà của nước lẩu.\nSau khi gà được chặt thành từng khúc, bạn cho gà vào tô rồi cho vào 2 muỗng hạt nêm, 2 muỗng đường, 3 muỗng nước mắm, ít bột ngọt, ớt băm nhuyễn, lá é băm nhuyễn.\nSau đó, bạn trộn đều và ướp gà trong 45 phút cho thịt gà ngấm đều gia vị.\nBước 3 : Chế biến nước lẩu\nBạn cho nồi lên bếp, cho 1 muỗng dầu ăn vào, đợi khi dầu nóng bạn cho tỏi băm vào phi thơm. \n– Tiếp theo, bạn cho thịt gà vào xào săn. Lúc này, bạn cho vào nồi một lượng nước vừa đủ vào nồi cùng với sả cắt khúc và măng đã xé sẵn.\nVớt sạch bọt để nước lẩu trong và ngon hơn. Sau đó, bạn nấu cho nước sôi lên, để măng chín nhừ. Tiếp theo, bạn cho nấm bào ngư vào đun sôi.\nBước 4: Hoàn thành\nBạn nêm nếm nước lẩu với 2 muỗng nước mắm, 1 muỗng hạt nêm, ít bột ngọt sao cho nước lẩu có vị hài hòa. Sau cùng, khi gà chín, bạn cho một ít lá é cắt khúc và ớt thái lát vào, nấu thêm 5 phút thì tắt bếp.\nBước : Thưởng thức\nBạn cho lẩu gà ra nồi và bắc lên bếp gas mini hoặc bếp điện, trình bày bún và lá é ra đĩa. Khi ăn, bạn nhúng lá é vào lẩu và thưởng thức kèm vói nước mắm nguyên chất cho vài lát ớt hoặc muối tiêu chanh."
  ),
  new Product(
    "m10",
    "c2",
    "Cách Nấu Mì Cay Hải Sản Tại Nhà Ngon Chuẩn Vị Hàn Quốc",
    require("../data/images/meal/m10.png"),
    120,
    44,
    "Mì cay Hàn Quốc từ lâu đã trở thành món ăn quen thuộc với nhiều người Việt Nam, nhất là với các bạn trẻ. Vị cay nồng của nước dùng nhưng đậm đà quyện cùng vị tươi của hải sản và dai dai của sợi mì khiến ai ai cũng thích thú.",
    "100g tôm\n200g thịt bò\n200g mực\nXúc xích\n1 bịch nấm kim châm\n½ bắp cải tím\n¼ bông cải xanh\nỚt bột Hàn Quốc\nHạt nêm, đường, bột ngọt,…\nMì gói Hàn Quốc (hoặc bạn có thể thay thế bằng mì trứng)\nLá quế",
    "Các bước nấu\nChuẩn bị Tôm bạn chọn những con còn tươi sống. Khi mua về, bạn rửa sạch tôm rồi bóc vỏ sau đó rút bỏ sợi chỉ đen trên lưng tôm. Hoặc nếu thích bạn có thể để nguyên vỏ tôm.\nMực bạn chọn loại mực ống còn tươi ngon. Sau khi mua về, bạn làm loại bỏ túi mực, làm sạch rồi cắt mực thành từng khoanh tròn nhỏ.\nThịt bò rửa sạch cắt miếng.\nXúc xích bạn cắt thành từng khúc vừa ăn.\nKim chi bạn cho ra đĩa, cắt thành từng khúc.\nBông cả xanh bạn cắt thành từng bông rồi ngâm với nước muối pha loãng. Sau đó, xả với nước lạnh và để ráo.\nBắp cải tím bạn cắt mỏng, ngâm với nước muối rồi rửa lại và để ráo.\nTỏi bóc vỏ, băm nhỏ.\nXào kim chi\nBạn cho nồi lên bếp, cho tỏi băm vào phi thơm vàng. Tiếp đến, bạn cho kim chi vào nồi, không cho nước kim chi. Xào khoảng 2 phút, thì bạn cho nước lọc vào nồi.\nSau đó, nêm nếm với 2 muỗng ớt bột Hàn Quốc, 1 muỗng đường, 1 muỗng hạt nêm, 3 muỗng tương ớt cùng nước kim chi. Rồi đảo đều và nấu với lửa lớn cho sôi lên.\nCho hải sản vào mì\nKhi nước dùng hoàn thành, bạn cho nước ra nồi đất nhỏ theo khẩu phần 1 người. Đây là cách ăn theo đúng phong cách của mì cay Hàn Quốc.\nTiếp đến, bạn cho nồi lên trên bếp, đun sôi lần nữa và lần lượt cho mực, bông cải, nấm kim chi và tôm vào. Nấu đến khi tất cả các nguyên liệu chín đều thì bạn cho mì, thịt bò và xúc xích vào rồi trộn đều lên.\nVậy là hoàn thành, khi thưởng thức bạn cho thêm lá quế lên trên là được."
  ),
  new Product(
    "m11",
    "c2",
    "Lẩu gà lá giang – cách tự nấu tại nhà và ăn với rau gì thì ngon?",
    require("../data/images/meal/m11.png"),
    123,
    34,
    "Thịt gà nấu gì ngon? Với gà bạn có thể chế biến thành vô vàn món ngon như gà kho, gà chiên, gà nướng và đặc biệt là lẩu gà. Trong đó, lẩu gà lá giang là một món ăn nổi tiếng của vùng đất Nam Bộ và được nhiều người khắp mọi vùng miền yêu thích. ",
    "Gà mái tơ: 1 con khoảng 1,5 kg\nLá giang: 300 gr\nSả: 2 củ\nỚt sừng: 1 quả\nMùi tàu (ngò gai): 5 lá\nGia vị: Muối, tiêu, đường, nước mắm ngon, bột ngọt\nHành phi + Mỡ tỏi + Bún\nRau ăn lẩu: rau muống chẻ, rau rút, kèo nào, giá đỗ, chuối bào",
    "Cách nấu lẩu gà lá giang\nBước 1: Sơ chế – Thịt gà: chà muối xung quanh con gà để khử mùi tanh. Sau đó, rửa sạch, chặt miếng vừa ăn. Ướp muối, tiêu, bột ngọt trong 15 phút (ướp theo tỉ lệ: \n2 thìa cà phê hạt tiêu + 1 thìa cà phê nước mắm + 1 thìa cà phê muối).\n– Lá giang: bỏ hết dây và các lá sâu, rửa sạch rồi để ráo, vò nhẹ lá để tăng vị chua.\n– Rau ngò gai: nhặt kỹ, rửa sạch rồi thái nhỏ.\n– Tỏi: bóc vỏ, đập dập, băm nhỏ.\n– Ớt sừng: rửa sạch rồi thái nhỏ.\n– Các loại rau khác: rửa sạch và cắt thành đoạn vừa ăn.\nBước 2: Hướng dẫn nấu lẩu gà lá giang\n– Bắc nồi lên bếp và tráng với một chút dầu rồi cho sả vào phi, đến khi sả vàng thì cho tiếp tỏi vào.\n– Khi bạn thấy sả và tỏi vàng thơm thì bỏ thịt gà vào xào. Khi thịt gà săn lại thì cho vào khoảng 2 lít nước.\n– Đến nồi nước sôi thì vớt bọt vặn lửa nhỏ lại để liu riu rồi nêm gia vị cho vừa ăn.\n– Khi thịt gà mềm thì bỏ lá giang vào, cho thêm chút ớt, tỏi phi và sa tế.\n\nBước 3: Trình bày\n– Dọn lẩu gà lá giang ra ăn kèm với bún, rau và dùng kèm nước mắm có thêm vài lát ớt."
  ),
  new Product(
    "m12",
    "c2",
    "Cách nấu lẩu vịt măng cay thơm ngon vừa ăn vừa suýt xoa",
    require("../data/images/meal/m12.png"),
    200,
    140,
    "Món lẩu vịt măng cay là món ngon khoái khẩu của rất nhiều người nên được các chị em nội trợ thường xuyên chia sẻ cùng nhau công thức và bí quyết để trổ tài chiêu đãi gia đình. Món lẩu nóng hổi với thịt vịt đầy dinh dưỡng, kết hợp với măng chua và ớt cay vừa giúp cho người ăn đỡ ngán lại cực kích thích vị giác. Những ngày trời  lạnh, mưa mà nấu món này càng hợp cho không khí quây quần ấm cúng. ",
    "Nguyên liệu nấu lẩu vịt măng cay\n– 1 con vịt khoảng 1 – 1,5kg\n– 500g măng chua\n– 6 bìa đậu phụ\n– 1 túi váng đậu\n– 2 củ khoai môn\n– 2 quả dừa\n– 1 củ gừng\n– 1 củ tỏi khô\n– 1 củ hành tím khô\n– 2 trái ớt tươi\n– Gia vị: tiêu, muối, đường, bột ngọt, rượu trắng, sa tế\n– Rau ăn kèm: rau muống, cải thảo, nấm các loại (nấm hương, nấm rơm, nấm kim chi…)\n– Bún",
    "Hướng dẫn cách nấu lẩu vịt măng cay ngon khó cưỡng\nBước 1: Sơ chế và ướp thịt vịt nấu lẩu vịt măng cay\n– Khi chọn vịt, bạn nên chọn con không quá non hoặc quá già và nên chọn những con vịt đực có ức tròn, da cổ và da bụng dày, mọc đủ lông. Nếu mua vịt làm sẵn, bạn nên chọn những con da bụng dày, ấn vào da thấy độ đàn hồi tốt là vịt tươi.\n– Hành, tỏi bóc vỏ, đập dập, băm nhuyễn.\n– Gừng lấy 1 nhánh khác cạo vỏ, đập dập, bằm nhuyễn.\n– Vịt sau khi mua về làm sạch lông và nội tạng. Để khử mùi hôi của vịt, bạn đập dập củ gừng, cho vào chén rượu trắng và thêm muối vào rồi chà khắp mình vịt. Rửa qua rồi xát tiếp một lượt muối nữa rồi rửa lại nước lạnh cho thật sạch.\n– Để cho vịt ráo nước rồi bạn đem chặt miếng nhỏ, cho vào tô hoặc nồi và thêm các gia vị gồm: 1 thìa canh nước mắm, 1 thìa canh hạt nêm, 1 thìa cà phê tiêu, 1 thìa canh hành, tỏi băm, 1 thìa canh gừng băm. Trộn đều tất cả nguyên liệu rồi ướp trong khoảng 20 phút cho vịt ngấm gia vị.\n– Đậu phụ bạn rửa qua cho sạch rồi cắt miếng vừa ăn.\n– Khoai môn gọt vỏ, rửa sạch, cắt khúc.\n– Các loại rau sống, nấm ăn kèm nhặt rửa sạch với nước muối loãng rồi cho vào rổ để ráo.\nBước 2: Sơ chế măng chua\n– Măng chua bạn thái mỏng, luộc lại 2 lần cho ra hết vị hăng, để ráo nước rồi đem xào sơ./Bnước 3: Tiến hành nấu lẩu và thưởng thức\n– Bắc nồi lẩu lên bếp, cho khoảng 1 thìa canh dầu ăn vào đun sôi thì cho hành tỏi băm vào phi thơm, sau đó trút thịt vịt đã ướp vào xào cho săn. Khi thịt vịt đã săn, bạn cho tiếp sa tế vào tùy theo khả năng ăn cay của bạn.\n– Sau đó, cho thêm khoai môn vào đảo đều với thịt vịt cho thấm vị rồi đổ nước dừa xiêm và nước lạnh vào nồi cho ngập mặt thịt.\n– Bật lửa to cho sôi thì hạ nhỏ lửa lại và đun trong khoảng 1 giờ cho thịt vịt chín mềm thì bạn cho tiếp măng chua, đậu phụ và váng đậu vào và đặt lên bếp từ và bày ra bàn ăn. Khi ăn nhúng các loại rau nấm ăn kèm cơm, bún…"
  ),
  new Product(
    "m13",
    "c3",
    "Tất tần tật cách làm thịt gà kho gừng, gừng sả, gừng nghệ đơn giản",
    require("../data/images/meal/m13.png"),
    330,
    200,
    "Nếu bạn đang lên thực đơn cho bữa cơm trưa nay thì hãy tham khảo qua 3 cách làm thịt gà kho gừng, gừng sả, gừng nghệ đơn giản dưới đây. Với món kho này, các bước chế biến khá đơn giản nhưng đây lại là món ngon cực hợp cho bữa cơm gia đình. Tin chắc rằng, bạn sẽ bị món ăn này hấp dẫn ngay từ những miếng gà đầu tiên.",
    "Gà: 500 – 600 gr hoặc ½ con (loại gà ngon nhất để kho là gà kiến hoặc gà tam hoàng)\nGừng: 50 gr\nHành tím, tỏi: 2 củ\nHành lá\nGia vị: dầu ăn, đường, nước mắm, bột ngọt, tiêu, muối.",
    "Thực hiện \n– Gà sau khi mua về thì rửa sạch, rửa qua với nước muối để khử mùi hôi, sau đó xả lại với nước sạch, để ráo. Bạn có thể trụng sơ gà qua với nước sôi, vớt ra chặt thành những miếng vừa ăn. Lưu ý khi mua gà nên chọn gà ta có trọng lượng khoảng 1,4kg đến 1,6 kg để khi chín thịt gà dai và giòn hơn.\n– Ướp thịt gà với 1 muỗng canh nước mắm, 1 muỗng canh bột ngọt, 1 muỗng café tiêu, 1  muỗng canh đường và chút xíu dầu ăn, hành đập dập, trộn đều và để yên gà trong 30 – 45 phút cho thấm gia vị.\n– Gừng để nguyên vỏ, rửa thật kỹ dưới nước cho sạch bùn đất, thái sợi mỏng.\n– Bắc chảo lên bếp, cho dầu ăn vào làm nóng, dầu sôi thì cho hành tím, tỏi băm vào phi lên cho thơm, cho tiếp phần gừng vào (lúc này bạn nên để lửa hơi to),\n– Cho gà vào đảo đều tay, nêm nếm gia vị sao cho vừa ăn với khẩu vị của bạn. Cho tiếp vào ½ bát nước, đậy nấp trong 5 phút. Khi thịt gà bắt đầu săn lại, chuyển màu thì bạn hạ lửa liu riu, cho tiếp gừng vào đảo đều tay trong khoảng 2 – 4 phút. Đến khi thịt gà chín hoàn là bạn có thể cho phần hành lá cắt nhỏ vào, đảo nhẹ rồi tắt bếp.– Cho gà ra dĩa, chan phần nước kho lên và rắc chút tiêu xay là hoàn tất món ăn."
  ),
  new Product(
    "m14",
    "c3",
    "3 Cách Kho Cá Nục Không Tanh, Đậm Đà Ngon Như Mẹ Nấu",
    require("../data/images/meal/m14.png"),
    222,
    33,
    "Cá nục là loài cá rất được người dân vùng biển ưa dùng trong các bữa cơm gia đình. Thịt cá có vị beo béo dễ ăn và đặc biệt khi kho với các nguyên liệu khác thì lại càng thơm",
    "Nguyên liệu làm cá nục kho với cà chua\nCá nục: 500 gr\nCà chua chín: 500 gr\nHành khô băm, gừng, hành lá, ớt, ngò.\nGia vị: đường, nước mắm, muối, dầu ăn, hạt nêm",
    "Cách làm cá nục kho cà chua\n– Cá nục sau khi mua về bạn rửa sạch, mổ bụng bỏ ruột cá. Dùng muối chà sát trong ngoài để khử mùi tanh của cá. Sau đó, rửa cá lại với nước sạch nhiều lần rồi cắt mỗi con thành 2 hoặc 3 phần (tùy theo kích cỡ). Sau đó, ướp cá với một chút hành khô băm, hạt nêm, tiêu xay và nước mắm khoảng 30 phút.\n– Cà chua cắt cuốn, rửa sạch, bổ múi cau.\n– Hành lá, ngò, gừng rửa sạch và thái nhỏ\n– Bạn bắc chảo lên bếp với chút dầu ăn, đợi dầu cho nóng già thì hẵng cho cá vào chiên sơ, 2 mặt cá vừa vàng đều thì bạn vớt cá ra, để ráo dầu.\n– Bắc nồi lên bếp, bạn cho chút dầu ăn vào, đun sôi dầu thì cho hành khô băm vào phi lên cho thơm. Tiếp theo, cho phần cà chua vào với 1 muỗng café bột nêm và đường, xào đều tay.\n– Sau đó, lần lượt cho cá và gừng ớt đập dập vào. Cho vào lượng nước vừa đủ xâm xấp mặt cá. Đợi cho nồi cá sôi thì hạ lửa về liu riu, ninh cho đến khi cá nhừ. Lúc này, bạn nêm nếm lại sao cho nồi cá vừa ăn.\n– Đến khi cá chín mềm, nước kho còn xâm xấp thì bạn cho hành lá, ngò và rắc chút tiêu xay, đảo nhẹ là có thể tắt bếp. Vậy là bạn hoàn tất món cá nục kho cà chua."
  ),
  new Product(
    "m15",
    "c3",
    "Bật mí cách làm món cá kho tộ ngon đậm thơm ngon nức mũi",
    require("../data/images/meal/m15.png"),
    44,
    10,
    "Bật mí cách làm món cá kho tộ ngon đậm thơm ngon nức mũi",
    "Nguyên liệu làm cá kho tộ\nCá lóc: khoảng 1 kg (ngoài ra bạn có thể chọn các loại cá da trơn như: cá lăng, cá trê, cá nheo… miễn là chúng phải tươi)\nThịt ba chỉ: 200 gr\nNước dừa non: 1 trái\nXì dầu ngọt\nHành khô, tỏi băm, vài trái ớt tươi\nGia vị gồm: nước mắm, muối, đường, hạt tiêu, hạt nêm",
    "Cách làm cá kho tộ miền Nam\nBước 1: Sơ chế và ướp cá kho\n– Cá lóc: sau khi mua về thì cắt bỏ nội tạng, đánh vảy, bỏ vây, làm sạch màng trắng đục trong bụng. (Đối với các loại cá có da trơn thì bạn có thể dùng tro bếp hoặc rưới nước sôi rồi cạo sạch lớp nhầy bên ngoài), ngâm cá trong dung dịch nước muối và giấm trong 5 phút để khử hoàn toàn mùi tanh, rửa cá lại với nước cho thật sạch. Sau đó, ướp cá với một ít xì dầu, muối, hạt nêm, nước mắm trong khoảng 30 phút.\n– Thịt ba chỉ: cũng rửa sạch với nước muối, xả sạch rồi thái thành những miếng vừa ăn.\n– Ớt rửa sạch, thái lát.\n– Bạn hòa 120 ml xì dầu ngọt với 50 ml nước mắm và nước dừa non cho hỗn hợp tan đều.\nBước 2: Kho cá\n– Bạn bắc tộ lên bếp để lửa cho nồi nóng rồi mới cho 1 chút xíu dầu ăn vào đun sôi thì cho tiếp hành tỏi băm vào phi cho thơm và sau cùng cho ớt vào xào sơ.\n– Cho tiếp thị ba chỉ vào đảo đều tay cho đến khi thấy thịt hơi chín thì tắt bếp, bắc nồi xuống.\n– Bạn xếp cá vào tộ, bạn cứ xếp cá lên trên phần thịt ba chỉ, cho cả phần nước ướp cá vào nồi. Cuối cùng bạn cho luôn chén nước hỗn hợp dừa non + xì dầu + nước mắm vào và bắc nồi lại lên bếp, để lửa to cho cá sôi.\n– Khi bạn thấy nồi cá sôi thì hạ lửa chỉ để liu riu, nêm nếm cho vừa miệng và tiếp tục đun cho đến khi nước cá còn xâm xấp là được.\nBước 3: Trình bày món ăn\n– Bạn rắc chút tiêu lên nồi cá, rồi gấp lượng cá vừa đủ ra dùng, dùng tới đâu thì lấy đũa sạch gấp ra tới đó. Dĩa cá trang trí thêm chút hành, ngò là đẹp mắt. Vậy là bạn hoàn tất làm món cá kho tộ chuẩn Nam bộ."
  ),
  new Product(
    "m16",
    "c3",
    "Cách nấu bò kho đơn giản thơm ngon đúng điệu",
    require("../data/images/meal/m16.png"),
    223,
    221,
    "Để có một nồi bò kho ngon, nhiều người có thể trải qua nhiều thời gian cũng như vài lần tập nấu thử nhưng điều này sẽ không còn tồn tại nữa nếu bạn biết cách nấu và những mẹo vặt dưới đây. Những mẹo nhỏ này không phải ai cũng biết.",
    "Nguyên liệu nấu bò kho\n1 kg thịt bò bắp có một chút gân, nạm bò\n1 củ cà rốt\n1 củ cải trắng\n4 củ khoai tây\n1 gói gia vị kho thịt bò (khoảng 25kg). Bạn có thể mua BỘT BÒ KHO tại đây.\n4 củ hành tím khô\n4 nhánh tỏi\n6 cọng sả\n1 nhánh gừng 100gr",
    "Cách làm món bò kho cho 4 người ăn\nBước 1: Sơ chế thịt bò và Thịt bò rửa sạch, thái thành miếng vuông vừa ăn. Đun một nồi nước sôi, thả gừng vào nồi và trần qua thịt bò trong vòng 2 phút để bỏ hết phần tạp chất ở thịt bò.\nTỏi, hành tím bóc vỏ băm nhỏ.\nSả bóc bớt phần già, đập dập, băm nhỏ phần gốc, giữ lại phần bên trên.\nCà rốt, củ cải trắng, khoai tay nạo vỏ rửa sạch rồi bổ miếng vuông vừa ăn.\nBước 2: Ướp thịt bò\nVớt thịt bò ra nồi, ướp với gói gia vị, 2 muỗng cà phê dường, 1 muỗng cà phê muối, ½ muỗng bột ngọt, hành băm và tỏi băm trong vòng 30p.\nBước 3: Nấu bò kho\nĐặt nổi lên bếp, thêm chút dầu ăn, xào nhỏ lửa cho tới khi thịt bò săn lại thì bạn đổ nước sôi xâm xấp mặt thịt hầm với lửa nhỏ.\nKhi thịt bắt đầu mềm, bạn cho cà rốt, khoai tây và củ cải trắng vào nồi, nêm lại cho vừa ăn rồi lại đun thêm 10 phút.\nHòa 1 thìa canh bột năng với bát con nước sôi, thêm từ từ vào nồi bò kho vừa thêm vừa khuấy đều tay cho thịt bò sánh hơn thì ngừng lại.\nTắt bếp, múc thịt bò ra chén và ăn cùng cơm trắng hoặc bánh mì."
  ),
  new Product(
    "m17",
    "c3",
    "Cách nấu cà ri gà sữa tươi hương mê ly, vị lôi cuốn",
    require("../data/images/meal/m17.png"),
    333,
    45,
    "Làm món gì ăn để giúp cả nhà đổi vị đây? Không cần phải suy nghĩ nữa vì cách nấu cà ri gà sữa tươi dưới đây chắc chắn sẽ giúp bạn trổ tài cực khéo mà cả nhà lại có món ăn ngon lạ miệng khó cưỡng.",
    "Nguyên liệu cần chuẩn bị để nấu món cà ri gà sữa tươi\n1 con gà ta khoảng 1kg\n300ml sữa tươi\n3 củ khoai tây vừa\n2 củ khoai lang vừa\n1 củ hành tây\n1 của cà rốt\n2 cây sả tươi\n1 gói bột cà ri Ấn Độ\n2 thìa bột năng.\n1 củ tỏi khô\n2 củ hành tím\nGia vị các loại: muối, tiêu, hạt nêm, dầu ăn, bột ngọt…",
    "Hướng dẫn cách nấu cà ri gà sữa tươi vừa ngon vừa giàu dinh dưỡng\nBước 1. Sơ chế nguyên liệu nấu cà ri gà sữa tươi\nBạn có thể mua gà đã được sơ chế sẵn hoặc để đảm bảo hơn, bạn nên mua gà về và tự làm. \nSaukhi sơ chế gà xong, bạn xát muối hạt lên khắp thân gà rồi rửa lại với nước cho sạch. Tiếp theo, bạn dùng dao sắc, lọc thịt gà thái miếng vừa ăn rồi để riêng, lấy phần xương gà, cổ gà và cánh gà để riêng.\nƯớp thịt gà: Bạn cho thịt gà đã thái miếng vào tô hoặc thố, sau đó thêm 1/3 thìa cà phê tiêu, 1 thìa cà phê hạt nêm, 1 thìa cà phê bột cà ri, 1/3 thìa canh muối, 1 thìa cà phê đường, hành tím và 1 thìa bột năng. Dùng đũa trộn đều rồi để ướp khoảng 30 phút cho thịt gà ngấm đều các gia vị. – Cà rốt gọt vỏ, rửa sạch rồi thái miếng. – Hành tây lột vỏ, rửa sạch, thái nhuyễn. – Khoai tây, khoai lang gọt vỏ, rửa sạch rồi cắt miếng vuông khoảng 5cm. – Tỏi, hành tím bóc vỏ, đập dập rồi băm nhỏ. – Sả lột vỏ già, rửa sạch rồi đập dập, cắt khúc và cột lại\nBước 2. Chiên sơ thịt gà\nBắc chảo lên bếp, cho 2 thìa canh dầu ăn vào đun sôi thì cho thịt gà vào chiên qua. Dùng đũa đảo đều để thịt gà không bị cháy. Để món cà ri được đậm vị hơn, bạn có thể thêm nếm lại gia vị cho vừa ăn theo sở thích.\nBước 3: Nấu cà ri gà với sữa tươi\nTiếp theo, bạn chuẩn bị một nồi nước, khoảng 1,5 – 2 lít, sau đó cho sả, xương gà, cánh và cổ gà vào đun sôi cho kỹ, khi đun thường xuyên hớt bọt cho nước dùng trong.\nKhi nước dùng sôi khoảng 5 phút thì bạn cho thịt gà đã cào qua vào. Ninh tiếp trên lửa nhỏ trong khoảng 20 phút cho thịt gà chín mềm, khi thấy nước bắt đầu sôi lăn tăn thì bạn cho khoai tây, khoai lang và cà rốt vào nồi đun sôi rồi cho sữa tươi vào, tiếp tục đun thêm 10 phút nữa thì tắt bếp. Để món cà ri gà sữa tươi được sánh quyện, bạn cho thêm 1 thìa bột năng hoặc bột ngô vào trước khi tắt bếp khoảng 3 – 5 phút là hoàn thành."
  ),
  new Product(
    "m18",
    "c3",
    "Bật mí cách làm món thịt kho đậu hũ nước dừa ngon hết ý",
    require("../data/images/meal/m18.png"),
    189,
    80,
    "Bật mí cách làm món thịt kho đậu hũ nước dừa ngon hết ý",
    "Nguyên liệu nấu thịt kho đậu hũ nước dừa\n– 500g thịt ba chỉ (ba rọi)\n– 200g đậu hũ\n– 2 củ hành tím khô\n– 1 củ tỏi nhỏ\n– 50g hành lá\n– 30g ngò rí\n– 300ml nước dừa\n– Gia vị: muối, nước mắm ngon, đường, hạt nêm, nước màu, dầu ăn, tiêu.",
    "Hướng dẫn cách kho thịt đậu hũ nước dừa thơm ngon hết ý\nBước 1: Sơ chế các – Thịt ba chỉ bạn nên chọn loại đều cả nạc và mỡ sẽ ngon hơn. Thịt mua về bạn rửa qua nước muối pha loãng, sau đó rửa lại cho sạch, để ráo rồi thái miếng vừa, không quá dày cũng không quá mỏng.\n– Đậu hũ trụng qua nước sôi rồi thái miếng vuông. Tiếp đó đem chiên vàng rồi vớt ra để ráo dầu.\n– Hành, tỏi bóc vỏ, dập dập rồi băm nhuyễn.\n– Hành lá, ngò rí nhặt rửa sạch, thái nhỏ.\nBước 2: Ướp thị\nCho thịt vào tô hoặc thố nhựa, nêm thêm: 1 thìa canh đường, hành, tỏi băm, 1 thìa canh nước mắm ngon, 1 thìa cà phê tiêu, 1 thìa cà phê hạt nêm, hành, 2 thìa cà phê nước màu, nửa thìa cà phe muối. Trộn đều rồi để ướp thịt trong khoảng 30 phút cho ngấm đều gia vị.\nBước 3: Kho thịt với nước dừa\n– Bắc chảo lên bếp, mỏ lừa vừa rồi cho 1 nửa thìa canh dầu ăn vào đun sôi thì trút thịt đã ướp vào, đảo đều cho đến khi thịt săn lại.\n– Khi thịt săn, nước cạn, tiếp tục cho thêm đậu hũ, nước dừa vào, đảo nhẹ cho đều rồi kho đến khi thịt chín mềm, nước còn sền sệt thì tắt bếp, rắc thêm hành lá và rau ngò vào. Nếu thích ăn cay bạn có thể cho thêm vài lát ớt xắt cho hương vị đậm đà hơn.\n– Múc thịt ra dĩa và trang trí thêm cho đẹp mắt là có thể thưởng thức."
  ),
  new Product(
    "m19",
    "c4",
    "Cách Làm Mực Chiên Nước Mắm Thơm Ngon, Đậm Đà Dễ làm",
    require("../data/images/meal/m19.png"),
    190,
    88,
    "Mực là loại hải sản ngon, cả mực tươi và mực khô đều được nhiều người ưa thích và có thể chế biến thành nhiều món ngon khác nhau. Mực tươi có thể nấu cháo, hủ tiếu, xào chua ngọt hoặc hấp,…Mực khô có thể nướng, chiên,…Trong đó, có một công thức mà bạn có thể áp dụng cho cả hai đó là món mực chiên nước mắm.",
    "200gram mực sữa\n1 thìa canh nước mắm\n1 thìa canh tỏi băm\n2 thìa canh tương ớt\n1 thìa cà phê bột nêm\n2 thìa cà phê đường",
    " Sơ chế – Mực làm sạch, lột da, moi bỏ ruột và mai mực rửa lại cho sạch rồi thấm khô nước để khi chiên không bị bắn dầu. Bên trong mực có túi mực nên các bạn hãy thật cẩn thận để túi mực không bị vỡ ra. Nếu túi mực vỡ ra, các bạn phải rửa đi, rửa lại rất nhiều lần mới sạch được\nTiến hành chế biến\n– Đặt một cái chảo dầu lên bếp, đun nóng dầu thì cho mực vào chiên khoảng 2 phút sau đó vớt mực ra đĩa. Mực là nguyên liệu nhanh chín nên các bạn lưu ý canh thời gian chiên, nếu chiên quá lâu, mực sẽ bị dai và khô, không còn ngon nữa.\n– Ở bước này, bạn pha nước mắm theo công thức: nước mắm, đường, bột nêm, tương ớt và một ít tỏi ớt băm. Khuấy đều cho các gia vị tan ra.\n– Trút bớt dầu trong chảo ra, chỉ để lại một ít. Cho tỏi vào phi thơm rồi cho mực đã chiên vào, sau đó cho nước mắm đã pha vào đảo đều cho mực thấm gia vị, chiên thêm 1-2 phút nữa là được.\nThưởng thức\n– Cho mực chiên nước mắm ra đĩa và thưởng thức ngay thôi."
  ),
  new Product(
    "m20",
    "c4",
    "Cách làm cánh gà chiên nước mắm ngon không cưỡng nổi",
    require("../data/images/meal/m20.png"),
    134,
    45,
    "Thịt gà là loại thịt dễ ăn nên không chỉ trẻ nhỏ mà ngay cả người lớn cũng đều yêu thích các món ăn từ chúng. Bên cạnh các món gà luộc, kho, xào… quen thuộc thì hôm nay chúng ta sẽ cùng nhau “đổi gió” HỌC NẤU ĂN với cách làm món cánh gà chiên nước mắm siêu ngon. Món ăn này sẽ góp phần bữa ăn nhà bạn trở nên ngon miệng với hương vị hấp dẫn, không thể chối từ.",
    "Cánh gà: 4 – 5 cánh. Bạn có thể chuẩn bị thêm vài miếng đùi để món ăn trông đa dạng hơn và dành cho trẻ nhỏ.\nTỏi: 2 củ\nGừng, ớt tươi: 1 củ\nRượu trắng, muối hạt\nGia vị: nước mắm, bột ngọt, hạt tiêu, dầu ăn.",
    "Bước 1\nTỏi bóc vỏ, giã nhỏ. Gừng thì bào vỏ và thái nhỏ.\nThịt gà sau khi mua về thì dùng rượu trắng và muối hột chà xát để thịt sạch mùi hôi. Sau đó rửa sạch mùi rượu và muối, chặt thành miếng vừa ăn hoặc để nguyên tùy ý bạn. Ướp gà với 1 – 2 muỗng nước mắm, ½ muỗng hạt tiêu, ½ muỗng bột ngọt, 1 muỗng dầu ăn và một chút gừng trong khoảng 15 phút.\nBước 2\nBắc chảo lên bếp và cho lượng dầu ăn vừa phải vào, đợi cho dầu sôi già thì cho từng miếng cánh gà thả vào chiên cho đến khi thịt gà chín giòn và có màu vàng đẹp mắt. Sau đó, vớt gà ra để cho ráo dầu.\nDùng tiếp chảo đã chiên cánh gà, cho tỏi và 1 muỗng nước mắm và 1 muỗng đường vào phi đến khi tỏi vàng thơm. Sau đó cho gà đã chiên vào lại chảo, đảo nhanh tay với lửa lớn và nêm nếm lại gia vị cho vừa ăn với bạn. Và khi chuẩn bị tắt lửa thì bạn cho ớt vào.\nBạn cho thịt gà ra dĩa và trang trí với rau xà lách, vài lát cà chua và thêm vài cọng ngò bên trên là món ăn"
  ),
  new Product(
    "m21",
    "c4",
    "Cách làm cơm chiên trứng đơn giản nhưng ngon khó cưỡng",
    require("../data/images/meal/m21.png"),
    190,
    98,
    "Không thể phủ nhận rằng những món ăn từ trứng luôn mang lại hương vị độc đáo và chinh phục được hầu hết tất mọi người. Trong đó, cơm chiên trứng là một món ăn hấp dẫn và được biến tấu thành nhiều cách khác nhau và rất được yêu thích",
    "1 chén cơm chín\n1 củ hành tây\n4 quả trứng\nHành lá\nNước mắm",
    "Bước 1: Sơ chế – Đập trứng cho vào chén và đánh tan.\n– Hành tây bóc vỏ, thái nhỏ.\n– Hành lá rửa sạch, cắt nhỏ.\nBước 2: Chiên cơm\nBạn cho dầu ăn vào chảo, rồi cho hành tây vào phi thơm. Tiếp theo, cho cơm vào đảo đều và gạt cơm qua một bên. Tiếp đến, bạn cho trứng vào rồi đảo đều trứng với cho trứng bám đều cơm. Cho vào 1 muỗng nước mắm và chiên đến khi hạt cơm săn lại thì tắt bếp rồi cho hành lá vào là được."
  ),
  new Product(
    "m22",
    "c4",
    "Bật Mí Công Thức Làm Chả Mực Ăn Là Ghiền",
    require("../data/images/meal/m22.png"),
    321,
    300,
    "Mực là một trong những loại hải sản được rất nhiều người yêu thích. Bên cạnh giá trị dinh dưỡng cao, mực còn có thể dùng để chế biến rất nhiều món ăn ngon với hương vị khó cưỡng.",
    "700 gam mực lá\n100 gam tôm thẻ\n0.5 gam mỡ heo\n0.5 gam thịt nạc heo\nHạt nêm\nMuối, đường\nTiêu xay\nNước mắm\nDầu ăn.",
    "Thực hiện\nBước 1: Sơ chế Đầu tiên, bạn bỏ phần túi mực và phần da bên ngoài trên thân mực rồi rửa mực với muối, dùng tay chà xát cho hết nhớt rồi xả lại với nước sạch, để ráo. Tiếp theo, bạn xắt mực thành từng miếng nhỏ vừa ăn, phần râu mực thì bạn đem cắt thành khúc và để riêng. Tôm cắt bỏ râu và đuôi, lột bỏ vỏ, dùng mũi dao nhọn loại bỏ phần chỉ đen ở lưng rồi rửa sạch, để ráo. Mỡ heo và thịt nạc rửa sạch, xắt thành miếng nhỏ vừa ăn.\nBước 2: Ướp gia vị\nCho mực, mỡ, thịt và tôm vào tô, nêm thêm gia vị theo tỉ lệ: 1 muỗng cà phê hạt nêm, 1 muỗng cà phê muối, 1/2 muỗng cà phê đường, 1/2 muỗng tiêu xay và 2 muỗng cà phê nước mắm. Trộn đều hỗn hợp trên rồi dùng màng bọc thực phẩm bọc kín lại, để trong ngăn đá tủ lạnh khoảng 4 tiếng. Với phần râu mực, bạn bọc kín bằng màng bọc thực phẩm và cũng cho vào ngăn đá.\nBước 3: Xay Sau khi phần nguyên liệu đã đông, bạn lấy ra cho vào máy xay nhuyễn cho đến khi nhuyễn và mịn. Tiếp theo, bạn cắt nhỏ râu mực và trộn vào cùng thịt mực đã xay nhuyễn, dùng chày giã cho đều tay để hỗn hợp được dai và mịn.\nBước 4: Chiên chả mực\nThoa một lớp dầu ăn mỏng lên tay rồi nặn thịt mực thành miếng có hình tròn dẹt, vừa ăn. Cho dầu vào chảo, bật bếp lên đến khi dầu sôi thì cho chả mực vào chiên chín vàng hai mặt. Khi chả chín thì vớt ra, cho lên đĩa có lót sẵn khăn giấy để thấm bớt phần dầu."
  ),
  new Product(
    "m23",
    "c4",
    "Cách làm trứng chiên thịt bằm ngon không ngừng đũa",
    require("../data/images/meal/m23.png"),
    334,
    120,
    "Trứng chiên thịt bằm là một trong những món ăn ngon phổ biến được nhiều lứa tuổi yêu thích, đặc biệt là trẻ nhỏ. Đây cũng là tuyệt chiêu cho bữa ăn ngon những ngày bận rộn của nhiều chị em nội trợ. Để biết cách làm trứng chiên thịt bằm ngon không ngừng đũa, bạn đừng bỏ qua bài viết này nhé!",
    "Các nguyên liệu làm món trứng chiên thịt bằm\nTrứng gà: 3 quả\nThịt nạc bằm: 100g\nHành tím khô: 1 củ\nHành lá: 30g\nGia vị: muối, nước mắm ngon, tiêu…",
    "Hướng dẫn cách làm trứng chiên thịt bằm\nBước 1: Sơ chế – Bạn nên mua thịt ba chỉ để vừa có nạc, vừa có mỡ sẽ ngon hơn và khi chiên trứng sẽ không bị khô. Thịt mua về bạn rửa sạch với nước muối loãng rồi rửa lại cho sạch, để ráo rồi băm nhỏ.\n– Hành tím khô bóc vỏ, rửa sạch, đập dập rồi bằm nhuyễn.\n– Hành lá nhặt bỏ gốc, lá úa, hư rồi rửa sạch, thái mịn.\nBước 2: Đánh trứng\nChuẩn bị tô hoặc thố sạch, đập hết trứng vào, tiếp đó cho thịt băm, 1 nửa hành lá thái mịn vào trộn đều rồi nêm các gia vị gồm: 1/3 thìa cà phê muối, ¼ thìa cà phê tiêu, ½ thìa cà phê  hạt nêm, 1 thìa cà phê nước mắm ngon. Dùng đũa đánh cho thật đều cho các gia vị tan hết\nBước 3: Chiên trứng thịt bằm\nSau khi chuẩn bị xong, bạn bắc chảo lên bếp, bật lửa vừa. Cho 1 thìa canh dầu ăn vào đun sôi thì cho hành tím băm vào phi thơm. Tiếp tục trút trứng trộn thịt bằm vào rồi lấy nắp đậy chảo lại cho trứng chín đều, quan sát khi thấy trứng vừa chín tới thì lật lại ngay lại để chín đều cả 2 mặt và có màu vàng đẹp thì tắt bếp.\nTrình bày ra đĩa, cắt miếng hình tam giác rồi rắc phần hành lá còn lại lên cho đẹp mắt là hoàn thành."
  ),
  new Product(
    "m24",
    "c4",
    "Hướng Dẫn Bạn Cách Làm Kimbap Chiên Ngon Chuẩn Hàn Quốc",
    require("../data/images/meal/m24.png"),
    210,
    120,
    "Kimbap là món ăn nổi tiếng của Hàn Quốc mà cet.edu.vn đã từng có dịp giới thiệu đến bạn. Ngày nay, các bạn trẻ cũng thích tự tay làm kimbap tại nhà để thưởng thức cùng với gia đình, người thân, bạn bè. Vậy bạn đã thử phiên bản chiên của kimbap chưa? Nếu chưa thì bài viết hôm nay sẽ hướng dẫn bạn 2 cách làm kimbap chiên đơn giản tại nhà nhưng siêu ngon.",
    "Nguyên liệu làm kimbap chiên xù\nCơm nóng: 400 gr\nTrứng gà: 2 – 3 quả để nguyên và 3 quả đánh tan)\nXúc xích hoặc giò\nCà rốt, dưa chuột: 1 quả\nRau cải: 1 bó\nCủ cải vàng muối\nRong biển: 6 miếng\nGiấm gạo, đường, muối, dầu mè, xốt mayonnaise\nBột chiên xù\nMảnh tre để cuốn kimbap",
    "Cách làm kimbap chiên xù\n– Bước 1: Nấu cơm để nguội rồi trộn cơm với dầu vừng và vừng rang.\n– Bước 2: Rán trứng và thái thành sợi dài với độ rộng khoảng 0,5 – 1 cm. Củ cải vàng, cà rốt, dưa chuột rửa sạch và thái sợi dài, thái tương tự với xúc xích.\n– Bước 3: Cuốn kimbap: Đặt mành tre (hoặc giấy nhôm) lên trên một chiếc mâm, sau đó, các nàng đặt lá rong biển lên (chú ý: các bạn hướng mặt nhám của rong biển lên trên). Tiếp theo là trải đều cơm lên mặt rong biển và đặt các nguyên liệu đã sơ chế ở trên theo chiều ngang của lá rong biển. Sau đó bạn cuốn kimbap (chú ý cuốn chặt tay, vừa cuốn vừa điều chỉnh sao cho nguyên liệu không bị xô lệch sẽ làm xấu kimbap).\n– Bước 4: Bạn cắt đôi chiếc kimbap đã cuộn cho đỡ dài. Đập 2 quả trứng gà vào 1 chiếc bát to rồi đánh tan. Nhúng kimbap vào bát trứng cho đều. Đổ bột chiên xù ra đĩa sau đó lăn kimbap vừa lăn qua trứng vào.\n– Bước 5: Bạn đổ ngập dầu vào chảo và cho kimbap vào chiên. Cuối cùng, bạn cắt kimbap ra thành từng miếng nhỏ."
  ),
  new Product(
    "m25",
    "c5",
    "Cách Nấu Mì Quảng Thơm Ngon, Chuẩn Vị Miền Trung",
    require("../data/images/meal/m25.png"),
    112,
    90,
    "Từ lâu, mì Quảng đã trở thành nét đặc trưng trong văn hóa ẩm thực của vùng đất Quảng Nam. Một tô mì vừa đẹp về hình thức vừa thơm ngon trong hương vị sẽ đủ sức chiều lòng những thực khách khó tính nhất. Nếu cả gia đình bạn cũng yêu thích món ăn này thì tại sao không vào bếp trổ tài ngay nhỉ? Đầu tiên hãy tham khảo hướng dẫn cách nấu mì quảng dưới đây để chế biến theo đúng vị người Quảng nhé!",
    "Nguyên liệu cần chuẩn bị\nThịt ba chỉ: 600g\nTôm thẻ: 400g\nXương heo: 500g\nTrứng cút: 30 quả\nSợi mì Quảng: 500g\nCủ nén: 50g\nHành tím: 3 củ\nĐậu phộng: 100g\nRau sống: bắp chuối, cải con, húng quế, húng lủi, giá đỗ\nNguyên liệu ăn kèm: chanh, ớt, hành ngò, bánh đa nướng\nGia vị nêm nếm: dầu đậu phộng, nước mắm, muối, đường, hạt nêm, bột nghệ, tiêu, bột ngọt, dầu điều",
    "Quy trình thực hiện\nBước 1: Sơ chế Tất cả nguyên liệu đều rửa sạch với nước muối pha loãng rồi để ráo.\nDùng kéo cắt bớt phần đầu và chân rồi bỏ phần chỉ lưng của tôm. Thịt ba chỉ và xương heo chần qua nước sôi, riêng thịt sẽ được cắt lát vừa ăn.\nCác loại rau sống ăn kèm nên giữ lạnh để tươi ngon. Hành ngò cắt nhỏ, hành tím và củ nén dùng chày giã nhuyễn,\nTrứng cút luộc chín, bóc vỏ; đậu phộng rang vàng, bỏ vỏ.\nBước 2: Nấu nước dùng và ướp gia vị\nTôm và thịt được để riêng trong 2 tô lớn, thêm muối, bột ngọt, tiêu, nước mắm, bột nghệ, dầu điều, củ nén và hành tím vào rồi trộn đều. Bạn sẽ ướp thịt và tôm khoảng 20 phút để thấm gia vị.\nChuẩn bị một nồi chứa 3 lít nước, cho xương heo vào và đặt lên bếp để nấu nước dùng. Hầm với lửa nhỏ trong khoảng 40 phút, thỉnh thoảng vớt bọt giúp nước dùng trong hơn.\nBước 3: Xào nhân tôm thịt\nBắc chảo lên bếp, cho dầu phộng vào đun sôi (đến khi bốc khói) thì hạ nhỏ lửa lại. Đây là cách khử dầu đậu phộng. Khi dầu bớt nóng, cho tôm vào xào săn thì tiếp tục thêm thịt ba rọi và trứng cút vào xào. Trộn đều để gia vị hòa quyện, thêm hai chén nước dùng vào. Bạn nêm nếm gia vị vừa miệng và nấu thêm 15 phút với lửa vừa thì tắt bếp.\nBước 4: Trình bày và thưởng thức\nCho sợi mì quảng vào tô, thêm thịt, tôm, trứng lên phía trên, rưới một ít nước xào của phần nhân. Cuối cùng bạn chan nước dùng vừa đủ, xâm xấp mặt mì và thêm ít hành ngò, đậu phộng rang. Món ăn được dọn kèm cùng rau sống với bánh đa nướng."
  ),
  new Product(
    "m26",
    "c5",
    "Cách Nấu Bún Thái Hải Sản Và Bún Thái Chay Ngon Chuẩn Vị",
    require("../data/images/meal/m26.png"),
    124,
    45,
    "Bún Thái không chỉ là món ăn độc đáo và phổ biến của xứ sở Chùa Vàng mà còn là món ăn được rất nhiều bạn trẻ Việt Nam yêu mến. Cách nấu bún Thái rất đơn giản và có thể biến tấu để thích hợp với cả người ăn chay",
    "400g tôm sú\n200g mực ống\n1kg nghêu hoặc sò huyết\n1kg xương ống\nNấm rơm búp\nCà rốt, cà chua, cải thảo, khoai cao\nTỏi, mắm, sa tế, sả\nBún tươi\nGia vị: Đường, hạt nêm, bột ngọt",
    "Cách làm bún Thái hải sản đơn giản\nBước 1: Sơ chế – Tôm bạn đem cắt bỏ phần râu, rửa sạch, để ráo.\n– Nghêu bạn đem ngâm nước cùng với 3 trái ớt đập dập, để loại bỏ hết chất cặn bẩn.\n– Mực tươi bạn đem rút bỏ túi mực, rửa sạch rồi cắt đoạn vừa ăn.\n– Cà chua bạn đem rửa sạch rồi cắt hình múi cau.\n– Nấm rơm cắt bỏ phần đầu dưới rồi rửa sạch, vớt ráo.\n– Cà rốt bạn gọt vỏ, rửa sạch rồi cắt cánh hoa.\n– Sả bạn đem băm nhuyễn.\nBước 2: Nấu nước dùng\nXương ống bạn rửa sạch, rồi chặt khúc rồi cho vào nồi cùng nước lọc hầm trong 1 – 2 tiếng để lấy nước dùng. Nêm nếm nước dùng với muối, hạt nêm, đường cho vừa khẩu vị. Lưu ý, trong quá trình nấu bún bạn nên thường xuyên vớt bọt để nước dùng được trong hơn.\nBước 3: Nêm nếm\nCho dầu ăn vào chảo, khi dầu ăn sôi bạn cho tỏi, sả vào phi thơm. Sau đó, cho nước dùng vào để nước dùng dậy mùi thơm và có màu đẹp mắt. Tiếp theo, bạn cho khoai cao và cà rốt đã chuẩn bị vào rồi trút hết vào nồi, đợi khi rau củ chín bạn tiếp tục nêm nếm cho bún Thái hải sản đậm đà.\nBước 4: Hoàn thành\nCuối cùng, bạn đun sôi nước rồi lần lượt cho tất cả các loại hải sản vào. Tiếp theo, bạn cho loại rau yêu thích vào rồi đảo sơ qua là có thể dùng ngay.\nBạn cho bún vào tô rồi chan nước dùng vào là thưởng thức được rồi đấy. Món bún Thái có mùi thơm đặc trưng của lá chanh, sả, vị chua chua của me, vị cay cay của ớt hòa quyện với các loại rau củ tươi ngon và ngọt thanh của hải sản. Nhanh tay thực hiện ngay món ăn này thôi nào."
  ),
  new Product(
    "m27",
    "c5",
    "Hướng Dẫn Làm Bún Chả Hà Nội Và Cách Pha Nước Chấm Ngon",
    require("../data/images/meal/m27.png"),
    215,
    56,
    "Bún chả Hà Nội là món ăn đặc trưng của người miền Bắc. Sở hữu hương vị thơm ngon đặc trưng, bún chả hiện không chỉ được người Việt Nam ưa thích mà còn chinh phục được rất nhiều vị khách quốc tế.",
    "Số lượng nguyên liệu chuẩn bị dưới đây có thể dùng cho khoảng 3 – 4 người ăn. Do vậy, tùy theo số lượng người cụ thể mà bạn chủ động điều chỉnh cho phù hợp nhé!\n500 gram thịt ba chỉ\n400 gram thịt nạc vai\nChanh, ớt, tỏi, hành tím, đầu hành\nSu hào, cà rốt\nGia vị: tiêu, nước hàng, xì dầu đen, dầu hào, nước mắm, dầu ăn, nước tương, mật ong\nRau thơm, bún",
    "Cách làm món bún chả Hà Nội\nBước 1: Sơ chế và chế biến – Thịt ba chỉ thái thành những miếng vừa ăn. Thịt nạc vai đem thái mỏng và băm rối.\n– Hành tím, đầu hành, tỏi đập dập, băm nhuyễn rồi chia thành đôi, cho vào 2 phần thịt lợn.\nBước 2: Cách ướp thịt bún chả Hà Nội\n– Tiếp tục cho vào mỗi phần thịt lợn một thìa canh nước hàng hoặc xì dầu đen, 1 thìa canh dầu hào, 1 thìa canh nước mắm, ½ thìa canh đường vàng, 1 muỗng canh nước tương, 1 muỗng canh mật ong và 1 chút tiêu xay.\n– Trộn đều để cho các gia vị thấm sâu rồi cho vào tủ lạnh để trong khoảng 3 – 4 tiếng.\n– Phần thịt vai băm, bạn làm thành hình tròn dẹt rồi đem nướng chín. Phần thịt ba thái miếng vừa ăn cũng vậy.\n– Cà rốt, su hào gọt vỏ rồi rửa sạch, để ráo. Cà rốt thái tròn mỏng, su hào thái vuông mỏng. Sau đó, cho chung vào một âu và cùng 1 chút muối ăn rồi xóc đều.\n– Ngâm cà rốt, su hào với muối trong khoảng 15 – 20 phút. Sau đó, đem rửa sạch rồi để ráo nước.\n– Cho ½ muỗng canh tỏi băm, ½ muỗng canh giấm, 2 muỗng canh đường rồi đảo đều đến khi đường tan rồi cho thêm chút ớt băm vào."
  ),
  new Product(
    "m28",
    "c5",
    "Học ngay cách nấu bún riêu cua đồng ngon nhất đúng chuẩn Nam Bộ",
    require("../data/images/meal/m28.png"),
    120,
    90,
    "Trong các món bún được cả hai miền Nam – Bắc yêu thích thì chúng ta không thể bỏ qua món bún riêu cua đồng.",
    "Nguyên liệu:\nCua đồng: 500 gr\nXương ống: 300 gr\nTrứng vịt lạc: 2 quả\nTôm khô: 50 gr\nThịt nạc dăm: 100 gr\nHuyết heo: 200 gr\nCà chua chín: 4 quả (khoảng 300 – 400 gr)\nĐậu hũ trắng: 2 miếng\nDầu điều: 2 muỗng canh\nMe chua: 30 gr\nHành tím băm, chanh, ớt\nMắm tôm: ½ chén\nGia vị: Nước mắm, tiêu, muối, đường, dầu ăn\nBún sợi nhỏ: 1 kg\nRau xà lách, rau muống chẻ, bắp chuối bào, giá, rau thơm",
    "Hướng dẫn cách nấu bún riêu cua ngon miền tây\nBước 1: Sơ chế – Cua: sau khi mua về thì bạn rửa thật sạch, gỡ mai, bỏ phần yếm và miệng cua, tách phần gạch cua ra chén để riêng. Với phần cua còn lại thì bạn ướp với ít muối rồi xả dưới nước lần nữa, sau đó giã (hoặc xay) nhuyễn, chắt lấy nước cua.\n– Phần xương ống: bạn rửa với nước muối rồi xả nước nhiều lần cho thật sạch, trụng sơ qua với nước sôi khoảng 2 phút rồi vớt ra. Sau đó, chắt hết nước ra hoặc cho xương vào nồi khác với lượng nước mới và hầm trong khoảng 45 phút.\n– Tôm khô: bạn ngâm nước cho đến khi nở mềm thì vớt ra, để ráo.\n– Thịt nạc dăm: rửa sạch, sau đó ngâm qua với nước muối cho khử mùi hôi rồi xả với nước sạch, thái mỏng rồi băm nhuyễn, bạn có thể ướp với chút hạt nêm và tiêu cho thịt đậm đà.\n– Trứng vịt lạc: đập ra tô, đánh trứng tan đều.\n– Huyết heo: luộc với nước sôi cho huyết vừa chín tới, không luộc quá lâu sẽ làm huyết bị nát, vớt ra ngâm sơ trong nước lạnh (nếu bạn mua huyết chín sẵn thì có thể bỏ qua bước này), cắt thành những miếng vuông vừa ăn.\n– Cà chua: rửa sạch, cắt cuốn và bổ múi cau.\n– Đậu hũ: cắt thành những miếng vuông nhỏ (khoảng 2cm) rồi chiên sơ cho vàng thì vớt ra, để ráo dầu.\n– Mắm tôm: hòa 2 muỗng mắm tôm với ½ chén nước, chờ cho lắng gạn lấy phần nước trong.\n– Các loại rau: nhặt sạch, rửa qua với nước muối rồi xả lại nước sạch, thái nhỏ.\n– Cho trứng gà + tôm khô + thịt nạc dăm vào tô, trộn đều với nhau\nBước 2: Nấu nước dùng\n– Bắc chảo, cho dầu điều và cà chua vào xào, bạn có thể nêm nếm gia vị cho vừa ăn. Khi thấy cà chua bắt đầu chín nhuyễn thì cho tiếp phần gạch cua vào xào cùng, đến khi gạch tan hết là tắt bếp.\n– Bắc nồi nước cua lên đun với lửa vừa, khi bạn thấy gạch nổi lên thì bạn gạt phần sang thành nồi, nhẹ tay cho nước hầm xương vào nồi nước cua, tránh mạnh tay làm nát phần riêu cua, lúc này bạn cho phần mắm tôm nước trong vào cùng, khuấy nhẹ.\n– Cho tiếp phần hỗn hợp cà chua xào vào, nêm nếm nồi nước dùng sao cho hợp khẩu vị thì cho tiếp huyết + đậu hũ vào nồi, khuấy nhẹ tay. Lưu ý, sau bước này thì bạn chỉ để lửa liu riu để giữ nóng cho nồi, đến khi các nguyên liệu chín đều là có thể dùng được.\n– Bạn có thể cho miếng nước dùng riêu cua vào me để dằm làm nước chấm.\nBước 3: Trình bày món bún riêu\n– Bạn trụng sơ trúng qua nước sôi rồi chan nước riêu vào tô ngập bún +  miếng huyết + vài miếng đậu hũ + cà chua + gạch cua rồi rắc chút tiêu xa, hành lá ngò. Dọn bún lên cùng với dĩa rau + mắm tôm + nước cốt me."
  ),
  new Product(
    "m29",
    "c5",
    "Học ngay cách nấu bún bò huế ngon và sa tế ăn kèm của người huế",
    require("../data/images/meal/m29.png"),
    192,
    34,
    "Bún bò Huế có tên gọi tiếng anh là Beef Soup of Hue, là một trong những món ăn đặc trưng của thành phố Huế nhưng ngày nay bạn có thể thấy nó khắp các ngõ ngách ở Việt Nam. Tuy nhiên, cùng với sự lan tỏa của món ăn này thì cách nấu của nó cũng bị biến tấu đi ít nhiều.",
    "Nguyên liệu cần có nấu bún bò Huế\nBắp bò: 600 gr\nNạm bò: 600 gr\nGân bò: 400 gr\nGiò heo (chọn giò trước): 1 cái khoảng 800 gr\nXương ông: 1 kg\nMắm ruốc Huế: khoảng 3 muỗng canh\nSả: 6 cây\nGừng: 50 gr\nHành tím, tỏi\nBún tươi cọng to\nRau sống (bắp chuối, giá sống, rau thơm, rau răm, hành lá, củ hành tây)\nChả Huế (tùy thích)\nỚt, sa tế, tiêu, muối, nước mắm, dầu ăn, dấm trắng\nHuyết heo (nếu không thích ăn huyết bạn có thể bỏ qua)",
    "Các bước thực hiện nấu bún bò Huế miền Nam\nBước 1: Sơ chế Thịt và xương bò thì nên rửa qua với nước muối rồi đến nước dấm, sau đó xả thật sạch dưới nước để khử hoàn toàn mùi hôi của thịt bò, để ráo. Phần bắp bò, bạn cuộn lại rồi dùng sợi chỉ buộc lại.\nGiò heo: cạo lông, rửa sạch, cho vào nồi nước, ninh đến khi da heo trong là được, tắt bếp, vớt ra. Bạn có thể cho vào một tí muối để luộc cùng.\nCác loại rau: nhặt bỏ phần hư, rửa sạch, để ráo.\nỚt tươi: cắt nhỏ, cho vào nước mắm.\nHành lá: cắt lấy phần đầu hành trắng, sắt sợi nhỏ. Củ hành trắng sắt mỏng. Rau răm sắt vừa phải cỡ 2/3 ngón tay út. Sả và gừng thì đập dập, rửa sạch.\nHuyết: nấu nồi nước sôi và cho phần huyết vào luộc cùng với ít muối, đường. Khi nào huyết đông, bạn dùng đũa đâm mà không thấy nước màu hồng chảy ra là được. Vớt ra, ngâm trong nước lạnh, rồi cắt thành miếng vừa ăn.\nPha phần mắm ruốc Huế với ½ chén nước, khuấy đều.\nBước 2: Ướp thịt\nBạn ướp tất cả các thịt theo công thức sau: 2 muỗng canh đường + 1 muỗng canh muối + ½ muỗng canh bột ngọt + 1 muỗng canh mắm ruốc đã pha + 2 muỗng canh hành tím băm + 2 muỗng canh tỏi băm + 2 muỗng canh sả băm.\nBước 3: Hầm thịt và xương\nBắc nồi lên bếp, cho 3 cây sả và ½ lượng gừng vào đáy nồi trước rồi mới cho xương và thịt giò heo vào, đổ vào lượng nước xâm xấp vừa ngập mặt thịt, đậy nấp, đun cho sôi. Khi thấy nồi sôi già thì hạ lửa nhỏ để liu riu thêm vài phút, tắt bếp. Vớt giò heo ra ngâm trong thau nước lạnh cho thịt săn chắc.\nVới phần bắp bò, nạm bò và gân bò thì bạn cũng hầm tương tự như xương và giò heo với lượng sả và gừng còn lại.\nLưu ý: vì thịt bò và thịt heo có độ dai khác nhau nên vì vậy phải hầm 2 loại thịt này riêng.\nBước 4: Nấu nước dùng bún bò Huế miền nam\nCho 2 loại nước hầm ban nãy vào chung 1 nồi lớn và cho thêm lượng nước vào sao cho đủ khoảng 5 lít nước, đun cho sôi rồi nêm nếm gia vị theo tỉ lệ sau: 3 muỗng canh nước mắm + 2 muỗng canh muối + 2 muỗng canh đường + 2 muỗng café bột ngọt + chén mắm ruốt Huế đã pha loãng. Sau cùng bạn cho huyết heo, chả vào nồi nước. Đợi cho sôi là bạn đã nước dùng cho món bún bò của mình.\nNếu bạn muốn nước dùng của mình có màu đẹp hơn thì có thể thực hiện thêm bước sau: Cho 1,5 muỗng canh sả băm + 1 muỗng canh tỏi băm vào chảo dầu nóng phi cho thơm rồi thêm vào 2 – 3 muỗng canh màu điều, đảo nhanh đều tay thì tắt bếp. Cho phần này vào nồi nước dùng đang nấu.\nBước 5: Trình bày món ăn\nTrụng bún qua nước sôi rồi cho vào bát, xếp thịt, gân, chả, giò, rắc ít rau ngò và chan nước dùng vào. Dọn kèm rau muống chẻ, bắp chuối bào, giá, rau thơm, chanh ớt, sa tế…"
  ),
  new Product(
    "m30",
    "c5",
    "Học ngay cách nấu món bún măng vịt ngon nhất cho bữa sáng dinh dưỡng",
    require("../data/images/meal/m30.png"),
    451,
    300,
    "Học ngay cách nấu món bún măng vịt ngon nhất cho bữa sáng dinh dưỡng",
    "Nguyên liệu cần chuẩn bị nấu món bún măng vịt\n1 con vịt (tùy theo số lượng người ăn, bạn có thể tăng hoặc giảm trọng lượng vịt) 1kg bún tươi\n500g măng tươi\nỚt, hành lá, những loại rau thơm (ngò, húng quế, húng lủi), rau xà lách\n500g xương gà\nGia vị: Dầu ăn, bột nêm, tiêu bột, bột ngọt, nước mắm",
    "Các bước thực hiện bún măng vịt\n– Bước 1: Chọn và sơ chế vịt\nĐầu tiên, khi chọn vịt, bạn nên chọn loại vịt đồng để có thịt chắc, thơm, không nên chọn vịt nuôi công nghiệp vì thịt sẽ bở không dai. Sau khi mua về, bạn vặt lông vịt, làm sạch phần ngoài và cả phần trong ruột của vịt, sau đó chà xát vịt với một ít rượu trắng, rửa sạch lại và vớt ra để ráo nước. Tiếp theo, để nấu bún măng vịt ngon thơm bạn nên khử mùi tanh của vịt, bằng cách cho vịt vào chần sơ với nước sôi và cho thêm vài lát gừng hoặc sả cây.\n– Bước 2: Nêm nếm \nSau khi chần xong, bạn dùng dao chặt vịt thành từng miếng vừa ăn rồi cho vào tô lớn. Tiếp theo, nêm nếm vịt với hạt nêm, đường, bột ngọt, rồi trộn đều, ướp trong 2 – 3 giờ để vịt ngấm đều gia vị.\n– Bước 3: Sơ chế các loại nguyên liệu khác\nXương gà khi mua về, bạn mang xương rửa sạch với nước muối pha loãng và để khô ráo.\nMăng bạn đem thái lát mỏng, rồi rửa thật sạch để ra riêng. Sau đó, bạn cho măng vào luộc với nước sôi để loại hết độc tố và giúp măng không bị đắng.\nCác loại rau ăn kèm, bạn cắt rễ, nhặt sạch rồi cho vào rửa với nước muối pha loãng, để ráo, ăn kèm với bún măng vịt.\nHành lá bạn đem cắt rễ, rửa sạch và thái khúc.\n– Bước 4: Tiến hành nấu\nCho tỏi bóc vỏ, băm nhỏ cùng dầu ăn vào nồi phi thơm, rồi cho nước vào, tiếp theo cho xương gà vào hầm từ 60 – 90 phút, rồi lọc lấy nước làm nước dùng. Khi lọc xong, bạn tiếp tục đun sôi nước, nêm nếm nước dùng với các loại gia vị cho vừa ăn. Sau đó, bạn cho vịt đã ướp vào nồi nấu chín. Cho vịt vào nấu khoảng 20 phút, bạn cho măng tươi vào nấu cùng.\n– Bước 5: Hoàn thành\nKhi vịt và măng chín, bạn nêm nếm lại một lần nữa cho vừa ăn thì tắt bếp."
  ),
  new Product(
    "m31",
    "c6",
    "Cách làm món vịt nấu chao đơn giản ngon đúng điệu",
    require("../data/images/meal/m31.png"),
    130,
    34,
    "Vịt nấu chao lại là một món ngon đậm chất miền Tây được rất nhiều yêu thích bởi hương vị thơm ngon, hòa quyện giữa thịt vịt, chao, khoai môn và các loại rau ăn kèm.",
    "Nguyên liệu chuẩn bị vịt nấu chao\n1/2 con vịt\n2 viên chao trắng\n2 viên chao đỏ\n200g khoai môn\nNước dừa xiêm (1 trái) hoặc không có nước dừa có thể dùng 1 lon nước cốt dừa và 1 bịch sữa tươi thay thế\n2 cây sả củ\nGừng, rượu trắng\nChanh\n2 muỗng màu dầu điều\nGia vị: mắm, muối, hạt nêm, hành, tỏi, tiêu\nBún tươi",
    "Chế biến vịt nấu chao\nBước 1: Sơ chế Gừng gọt vỏ rửa sạch rồi giã nhuyễn, trộn với rượu trắng để ướp vịt. Vịt rửa qua với nước cho sạch rồi chặt khúc, sau đó chà hỗn hợp gừng hoặc chanh và rượu lên thịt rồi để tầm 20 phút rồi rửa lại nước cho sạch, cho ra rổ cho ráo nước. Dừa chặt lấy nước để ra tô riêng. Khoai môn gọt vỏ, cắt lát vừa ăn rồi rửa sạch cho ra chất mủ, để món lẩu vịt nấu chao ngon hơn thì chiên khoai môn sơ qua dầu trước sẽ làm khoai môn vàng, giòn ngon hơn và không bị nát vụn khi bỏ vào lẩu.\nBước 2: Ướp thịt\nCho thịt vào âu lớn ướp với gia vị: chao dằm nát, hành tỏi giã nhuyễn, sả cắt khúc đập dập, thìa muối nhỏ, ½ thìa đường, 1 thìa hạt nêm, ½ thìa tiêu hạt tất cả cho vào au trộn đều với thịt, ướp tầm 2-3 tiếng.\nBước 3: Nấu thịt với chao\nKhử dầu, phi hành thơm rồi cho thịt đã ướp và 2 muỗng màu điều đảo đều tay trên lửa lớn, khi thấy sôi thì hạ lửa nhỏ đun tiếp 20 phút đến khi thấy miếng thịt săn lại là được. Sau đó cho nước dừa vào ngang mặt thịt (trường hợp dùng nước cốt dừa và sữa tươi thì cho thêm chén nước lọc vào nấu cùng), cho tiếp khoai môn đã chiên vào nấu tiếp đến khi chín rồi nêm nếm gia vị vừa ăn.\nBước 4: Làm nước chấm thịt vịt\nDằm nát 2 viên chao trắng rồi pha với 2 thìa đường, 1 muỗng nhỏ bột ngọt, nặn vào vài giọt chanh, sau đó cho 1 thêm muỗng cà phê sa tế khuấy đều là bạn đã có thể thưởng thức ngay món vịt nấu chao thơm ngon."
  ),
  new Product(
    "m32",
    "c6",
    "Cách Nấu Thịt Ba Chỉ Om Chuối Ngon Ngất Ngây Tại Nhà",
    require("../data/images/meal/m32.png"),
    179,
    100,
    "Thịt ba chỉ om chuối đậu từ lâu đã là món ăn dân dã, quen thuộc trong các mâm cơm gia đình người Việt vào mùa hè. Với những nguyên liệu quen thuộc cùng cách chế biến khá đơn giản, bạn và gia đình sẽ được thưởng thức trọn vẹn món ngon này ngay tại nhà.",
    "Chuẩn bị 4 quả chuối xanh to\n300gr thịt ba chỉ\n1 bó tía tô\n3 miếng đậu nhỏ\n1 bó lá lốt\n1/2 củ tỏi\n2 củ hành tím\n1 quả ớt\nHạt nêm\nMuối\nMẻ\nDầu ăn\nChảo sâu lòng hoặc xoong thông thường",
    "Cách làm thịt ba chỉ om chuối đậu\nBước 1: Sơ chế Băm nhỏ tía tô và hành, ớt thái thành lát. Tước vỏ chuối xanh, thái miếng vừa ăn, ngâm trong nước lạnh pha giấm cho đỡ thâm. Sau đó, bạn rửa sạch thịt ba chỉ với nước muối pha loãng rồi thái miếng, ướp với hành tím băm nhỏ và 2 thìa cafe hạt nêm.\nBước 2: Rán đậu, xào thịt và chuối\nBạn cắt đậu thành những cắt miếng vuông vừa ăn rồi cho vào chiên vàng. Sau đó, làm nóng chảo lần nữa rồi cho tỏi bằm vào phi thơm, trút thịt vào xào nhanh. Chờ cho thịt chín và săn lại, bạn cho chuối xanh vào và đảo khoảng 3 phút, nêm 1 thìa cafe muối.\nBước 3: Hoàn thành món chuối đậu thịt\nỞ bước cuối cùng, bạn thêm nước vào chảo, bật lửa lớn đun sôi rồi bớt lửa và đậy vung om khoảng 20 phút. Lượng nước tùy theo bạn thích ăn nhiều hay ít để điều chỉnh. Lúc này chuối cũng đã bở nhất định, bạn cho đậu vào đun sôi rồi nêm nếm lại cho vừa miệng. Để hoàn thành món chuối đậu thịt, bạn cho lá lốt, tía tô và ớt vào chảo, đảo đều rồi tắt bếp."
  ),
  new Product(
    "m33",
    "c6",
    "Cách nấu canh chua cá dọc mùng thơm ngon hấp dẫn",
    require("../data/images/meal/m33.png"),
    156,
    78,
    "Canh chua cá dọc mùng không chỉ được yêu thích bởi hương vị chua chua, thanh mát mà còn giúp cơ thể thanh nhiệt vào những ngày trời oi bức. Thế nhưng, cách chế biến dọc mùng thế nào mới đúng và cách nấu canh cá dọc mùng ngon ra sao thì không phải ai cũng biết.",
    "Nguyên liệu canh cá dọc mùng\n1 con cá lóc\n2 cây dọc mùng\n100g giá đỗ\n300g đậu bắp\n2 quả cà chua\n1 vắt me chua\n¼ quả dứa\nNgò gai, cần tây\nTỏi, hành khô\nNước mắm, đường, hạt nêm, muối",
    "Cách nấu món canh chua cá dọc mùng \nBước 1: Sơ chế – Cá lóc bạn nên chọn loại cá lóc đồng, thịt sẽ ngọt và ngon hơn. Khi mua về, bạn đánh vảy, cắt vây, mổ bụng rồi rửa sạch. Bạn có thể giữ lại phần nội tạng của cá rồi cho cá vào rửa với nước muối pha loãng. Sau đó, bạn cắt cá lóc thành từng khúc vừa ăn. Rửa lại lần nữa cho sạch rồi vớt để ráo nước.\n– Dọc mùng bạn sơ chế theo cách trên.\n– Me bạn cho vào chén, thêm chút nước ấm rồi dùng muỗng dầm me cho nát. Sau đó, lấy phần nước và bỏ hạt me.\n– Dứa bạn đem gọt vỏ, cắt thành từng lát mỏng.\n– Giá đỗ bạn ngâm với nước muối rồi rửa lại nhiều lần cho sạch.\n– Cà chua rửa sạch, cắt múi cau.\n– Đậu bắp bạn cắt bỏ cuống, rửa sạch, thái vát.\n– Rau cần tây và ngò gai bạn đem rửa sạch, cắt khúc.\n– Tỏi bạn bóc vỏ, băm nhỏ.\nBước 2: Nấu cá lóc\nBạn cho nước vào nồi rồi đặt lên bếp nấu sôi. Tiếp theo, cho cá lóc vào, nêm với ít muối, ít bột ngọt rồi nấu đến khi cá lóc chín, bạn vớt ra để đĩa riêng.\nBước 3: Nấu canh dọc mùng\nBạn cho tỏi băm và dầu ăn vào nồi phi thơm. Tiếp đến, khi tỏi vàng bạn dứa và cà chua vào xào cho dậy mùi thơm. Rồi bạn cho nước lọc vào cùng với nước cốt me. Sau đó, nêm nếm 2 muỗng đường, 2 muỗng hạt nêm, 1 muỗng nước mắm, ít bột ngọt cho vừa ăn. Bạn có thể cho thêm ớt vào nếu ăn cay. Vị chua chua, ngọt ngọt, the the nơi đầu lưỡi sẽ giúp bạn kích thích vị giác, bữa ăn sẽ ngon miệng hơn."
  ),
  new Product(
    "m34",
    "c6",
    "Cách nấu thịt đông lạ miệng chiêu đãi cả nhà",
    require("../data/images/meal/m34.png"),
    123,
    45,
    "Thịt nấu đông là món ăn vô cùng quen thuộc vào mỗi độ xuân về hay những mâm cỗ của người miền Bắc. Thịt đông có hình dạng giống như rau câu nhưng có vị mặn từ thịt, dai dai, sần sật của tai heo và nấm càng ăn càng thích, không gây ngán.",
    "Nguyên liệu nấu thịt đông\n1kg thịt chân giò\n1 cái tai heo\n100g nấm hương\n100g mộc nhĩ\nHành khô, gừng\n1 củ cà rốt\nNước mắm, đường, bột ngọt, hạt tiêu, hạt nêm",
    "Cách nấu thịt đông thơm ngon\nBước 1: Sơ chế – Thịt chân giò bạn nên chọn phần chân giò trước. Vì phần này có thịt mỏng, mềm ngọt lại có nhiều gân sẽ tạo độ giòn sần sật cho món thịt lợn đông. Bạn chọn thịt chân giò tươi, có da trắng sạch, đó là những con lợn khỏe mạnh. Vì phần da heo cũng rất quan trọng với chất lượng món ăn. Sau đó, bạn cắt thịt thành từng miếng nhỏ vừa ăn.\n– Tai heo khi mua về bạn cạo sạch lông và chất bẩn, rồi dùng muối và giấm chà xát vào tai. Sau đó, đem rửa sạch nhiều lần với nước. Tiếp đến, bạn cắt thành những sợi mỏng. Nếu không thích ăn tai bạn có thể thay thế bằng miếng da lợn đều được\n– Nấm hương và mộc nhĩ bạn cắt chân, cho ngâm trong nước để nở mềm. Sau đó, bạn thái nhỏ nấm, nhưng không nên thái quá nhỏ sẽ khiến món ăn không còn độ giòn.\n– Cà rốt bạn gọt sạch vỏ, tỉa hoa.\n– Hành khô bóc vỏ băm nhỏ.\n– Gừng cạo vỏ, đập dập.\n– Hạt tiêu bạn đem rang lên, đập dập, một ít thì xay mịn.\nBước 2: Luộc thịt\nBạn cho nồi nước lên bếp, cho vào ít muối, hành khô gừng rồi nấu sôi. Khi nước sôi bạn cho thịt heo lẫn tai heo vào chần sơ để thịt sạch hơn và khử mùi hôi. Khi chần xong bạn cho thịt vào thau nước lạnh ngay để da heo có được độ giòn. Sau đó, bạn để ráo 5 phút và cho chúng vào thau, ướp cùng với 5 muỗng nước mắm, 1 muỗng bột ngọt. Trộn đều và ướp 30 phút cho ngấm.\nBước 3: Xào Cho chảo lên bếp, cho dầu ăn và hành khô băm vào phi thơm. Tiếp đến, cho nấm hương, mộc nhĩ vào xào với ít hạt nêm rồi trút ra đĩa để riêng. Sau đó, bạn cho tiếp chân giò và tai heo đã ướp vào chảo, xào cho săn lại. Nêm nếm với 1 muỗng đường, 1 muỗng hạt nêm, chút bột ngọt, tiêu xay cho vừa ăn xào thêm 5 phút thì bạn tắt bếp.\nBước 4: Nấu thịt\nBạn cho phần thịt xào vào nồi, rồi cho nước vừa ngập mặt thịt. Nấu cho nước sôi lên, thì bạn vớt bọt để món thịt đông không bị đục. Sau đó, đậy kím nắp để nấu. Khi thịt mềm, bạn cho nấm hương, mộc nhĩ, hạt tiêu đập dập vào nồi, nấu thêm 10 phút nữa thì tắt bếp."
  ),
  new Product(
    "m35",
    "c6",
    "Cách nấu canh chua bông điên điển cá lóc ngon",
    require("../data/images/meal/m35.png"),
    189,
    123,
    "Canh chua bông điên điển là món đặc sản của vùng Tây Nam Bộ. Vị bùi, ngọt, thanh mát của bông điên điển kết hợp với cá lóc béo ngậy cùng vị chua chua, the the sẽ khiến bạn ăn hết nồi cơm lúc nào không hay đấy!",
    "Nguyên liệu cần chuẩn bị\n– 300g bông điên điển\n– 1 con cá lóc\n– 1 vắt me\n– Tỏi, ớt\n– Rau om, ngò gai\n– Đường, nước mắm, muối, hạt nêm, bột ngọt",
    "Cách nấu canh chua cá lóc bông điên điển cá lóc\nBước 1: Sơ chế – Cá lóc bạn nên chọn loại cá lóc đồng, chắc thịt. Sau khi mua về, bạn làm sạch rồi ngâm cá lóc với nước muối pha loãng 15 phút. Mang cá rửa lại với nước sạch, rồi để ráo, cắt thành từng khúc vừa ăn.\n– Bông điên điển bạn chọn loại tươi vàng. Khi mua về, nhặt bỏ cọng già, héo úa, để lại những bông còn tươi. Sau đó, bạn mang rửa sạch rồi vớt để ráo.\n– Rau om, ngò gai bạn đem nhặt, rửa sạch và cắt khúc ngắn.\n– Ớt bạn đem bỏ cuống, rửa sạch, cắt lát.\n– Tỏi bóc vỏ, băm nhuyễn.\n– Me bạn ngâm với nước ấm rồi tán nhuyễn và lọc qua rây để lấy nước cốt.\nBước 2: Nấu cá lóc\n– Bạn cho dầu ăn cùng tỏi băm vào nồi phi thơm. Cho tiếp nước lọc vào cùng với nước cốt mưa. Nấu đến khi nước sôi lên thì bạn cho cá lóc vào.\n– Nêm nếm với 1 muỗng hạt nêm, 1 muỗng cà phê đường, ít muối ăn, ít bột ngọt, 1 muỗng nước mắm. Nấu đến khi canh cá sôi lên thì bạn vặn nhỏ lửa.\nBước 3: Nấu canh cá lóc bông điên điển\n– Tiếp theo, bạn cho bông điên điển vào nồi canh, đảo đều trong 2 phút cho bông điên điển chín thì tắt bếp. Bạn cho ngò om và ngò gai lên trên là hoàn thành rồi đấy!\n– Giờ thì bạn chỉ cần múc canh ra tô, ăn kèm với cơm trắng và món mặn sẽ rất tuyệt vời. Đừng quên chuẩn bị kèm chén nước mắm mặn có cho vài lát ớt nhé!"
  ),
  new Product(
    "m36",
    "c6",
    "“Tuyệt chiêu” nấu canh ốc chuối nấu đậu ngon chuẩn vị Bắc",
    require("../data/images/meal/m36.png"),
    323,
    234,
    "Hương vị dân dã vô cùng quen thuộc của món canh ốc chuối nấu đậu khiến chẳng ai nỡ chối từ. Nhưng để nấu canh ốc chuối đậu ngon chuẩn vị miền Bắc thì không phải ai cũng biết cách. Từ cách sơ chế ốc cho đến công đoạn chế biến, nêm nếm gia vị đều cần phải có bí quyết. Tham khảo ngay bài viết sau đây để khám phá những bí quyết đó nhé!",
    "Nguyên liệu cần có để nấu ốc chuối đậu\n1kg ốc nhồi\n200gr thịt ba chỉ\n3 miếng đậu phụ\n5 quả chuối xanh\n1 quả cà chua\n1 củ nghệ\n1/2 bát mẻ\n1/2 thìa cà phê mắm tôm\nHành khô, tỏi khô vừa đủ\nLá lốt, lá tía tô, hành lá\nDầu ăn",
    "Cách nấu ốc chuối đậu ngon\nBước 1: Cách sơ chế ốc\n– Ốc nhồi sau khi mua về bạn cho ngâm vào chậu nước vo gạo cho ốc nhả bớt nhớt và các chất bẩn ra. Bạn dùng dao chặt phần chôn ốc rồi dùng mũi dao cạy miệng ốc và khều lấy ruột ốc ra\nSau đó, lấy mũi dao gạt bỏ đi phần đường phân ốc. Cứ làm như vậy cho đến khi hết số ốc.\n– Tiếp theo, bạn lấy muối và giấm bóp cùng thịt ốc cho ra hết nhớt thì rửa sạch lại thật sạch bằng nước. Sau đó, dùng dao thái ốc thành miếng nhỏ rồi đem ướp cùng gia vị và hành tỏi băm nhỏ trong khoảng 20 phút.\n– Cách làm ốc này có phần hơi cầu kỳ và mất công hơn so với cách luộc ốc rồi mới lấy phần thịt, tuy nhiên ốc được làm sống thì khi xào sẽ cho hương vị ngon hơn, giòn hơn mà không bị dai\nBước 2: Sơ chế các nguyên liệu khác\n– Hành tỏi khô bạn đem bóc vỏ và băm nhỏ. Cà chua rửa sạch, bổ múi cau. Hành, tía tô và lá lốt đem rửa sạch, thái nhỏ. Mẻ cho vào bát, đổ thêm nước vào và khuấy cho tan, sau đó lọc lấy nước.\n– Chuối xanh nên chọn những quả chuối tươi, vỏ xanh và không có vết thâm. Bạn đem chuối đi gọt vỏ, thái vát mỏng rồi cho chuối vào ngâm với nước muối pha loãng cho khỏi thâm. Đem chuối đi luộc sơ rồi vớt ra ngâm ngay vào nước lạnh.\n– Thịt ba chỉ làm sạch, đem đi thái con chì hoặc thái miếng vừa ăn. Sau đó, bạn ướp thịt cùng gia vị và hành khô băm nhỏ trong khoảng 15 phút.\n– Đậu phụ rửa sạch, thái miếng vuông rồi đem rán vàng.\n– Nghệ rửa sạch, đem giã nhỏ và lọc lấy nước. (Nếu không thích ăn nghệ thì bạn có thể bỏ qua bước này).\nBước 3: Nấu canh ốc chuối đậu\n– Bắc nồi lên bếp đun nóng, thêm vào 1 muỗng nhỏ dầu ăn. Khi dầu nóng già cho hành tỏi vào phi thơm, sau đó đổ ốc đã ướp gia vị vào xào chín.\n– Trong chảo đó, bạn tiếp tục cho thịt ba chỉ vào chảo xào săn, sau đó trút cà chua, chuối vào xào cùng, nêm thêm gia vị cho vừa miệng, sau đó cho nước mẻ lọc trộn cùng mắm tôm và nước nghệ tươi vào, thêm chút nước cho xâm xấp thịt và chuối. Tất cả nguyên liệu và gia vị khuấy đều.\n– Đun tất cả cho sôi lên rồi vặn nhỏ lửa, đun liu riu cho đến khi thịt và chuối chín mềm thì bạn cho đậu rán vào đun một lúc, sau đó cho ốc vào, nêm thêm gia vị cho vừa miệng. Đun tiếp cho đến khi nồi canh sôi trở lại rồi cho tía tô, lá lốt, hành lá thái nhỏ vào, dùng đũa trộn đều lên và tắt bếp."
  ),
];
