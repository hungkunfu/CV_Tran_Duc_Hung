let skills = [];
let educations = [];
let experiences = [];
let projects = [];
let certificates = [];
let referencePersons = [];

let shortTaget = "Phải vượt qua được vòng phỏng vấn và trở thành nhân viên chính thức của công ty. Hòa nhập với môi trường làm việc mới trong vòng 2 tuần. Tìm tòi và học tập từ đàn anh/chị để hoàn thành tốt các công việc được giao ";
let longTaget = "Tham gia vào nhiều dự án tầm trung và lớn để phát triển thêm các kiến thức và kỹ năng để trở thành Senior trong 4 năm. Tiếp tục phấn đấu thành Leader trong 3 năm và thành Manager trong 2 năm tiếp theo.";
let introduce = "Là một người có niềm đam mê với lập trình. Có khả năng tự tìm kiếm và học tập khá cao.";
let character = "Hiền lành, vui vẻ, thẳng thắng, cầu tiến và có tinh thần trách nhiệm."

var person = {}
person.id = 1;
person.avatar = "assets/img/cv.jpg";
person.name = "Trần Đức Hùng";
person.gender = "Nam";
person.dob = "17/09/1996";
person.level = "Đại Học"

let contacts = new Contacts(1, "0834529293", "hungkunfu@gmail.com", "Hương Toàn, Hương Trà , TT Huế", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.435093612428!2d107.51786351417553!3d16.504117832021592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a7a40e5d0fcb%3A0x9a78c81b1f3f7b94!2zSMawxqFuZyBUb8OgbiwgSMawxqFuZyBUcsOgLCBUaOG7q2EgVGhpw6puIEh14bq_LCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1620030501131!5m2!1svi!2s", 1);
person.contacts = contacts;
person.gitHub = "https://github.com/hungkunfu";
person.character = character;
person.interests = "Đá bóng , Thích nghe nhạc";
person.shortTaget = shortTaget;
person.longTaget = longTaget;
person.introduce = introduce;

let html_css_js = new Skill(1, "HTML, CSS, JAVASCRIPT, BOOTSTRAP", 60, 1);
let net_core = new Skill(2, "NET CORE 3.1", 60, 1);
let asp_net_mvc = new Skill(3, "ASP.NET MVC 3.1", 65, 1);
let api = new Skill(4, "RESTFUL API", 50, 1)
let ajax = new Skill(5, "AJAX", 45, 1);
let database_sp = new Skill(6, "SQL SERVER 2019", 55, 1);
let scrum_git = new Skill(7, "SCRUM, GITHUB", 40, 1);
let angualar = new Skill(8, "ANGULAR 11", 40, 1)
let teamwork_search = new Skill(9, "TEAMWORK, SEARCH", 60, 1);


skills.push(html_css_js, net_core, asp_net_mvc, api, ajax, database_sp, scrum_git, angualar, teamwork_search);
person.skills = skills;

let nursing = new Education(1, "2014 - 2018", "Đại Học Khoa Học Huế", "Chuyên ngành: Ngành Công Nghệ Thông Tin", 1);
let technology = new Education(2, "11/2020 - Hiện tại", "CODEGYM HUẾ", "Khóa học:BOOTCAMP .NET", "", 1);

educations.push(nursing, technology);
person.educations = educations;

let exps = [];
let exp1 = "Tháng đầu tiên ước chừng mình sẽ không làm được website nào, nhưng vì sự tìm tòi học hỏi từ các bạn và hướng dẫn viên mình đã tự làm ra trang web cơ bản đầu tiên bằng html và javascript"
let exp2 = " Tiếp theo học được các kiến thức cơ bản cho đến nâng cao về ngôn ngữ C# để xây dựng ứng dụng backend. Sau 3 tháng đã sử dụng công nghệ NET CORE , Framework NET MVC xây dựng được website quản lý và bán hàng và bản thân đã biết quản lý công việc bằng Product Backlog.";
let exp3 = "Trong tháng tiếp theo được biết thêm công nghệ Angular để rồi cùng hai thành viên khác tạo thành nhóm xây dựng nên ứng dụng web . Từ đó thu nhặt được kĩ năng làm việc nhóm cho bản thân mình, rút ra được tinh thần đồng đội và tinh thần trách nhiệm với công việc mình đã và đang làm.";

exps.push(exp1, exp2, exp3);
let codeGym = new Experience(1, "11/2020 - Hiện tại", "CODEGYM HUẾ", "Học viên", exps, 1);
experiences.push(codeGym);
person.experiences = experiences;

let project1 = new Project(1, "Web bán hàng áo quần", "assets/img/portfolio/trangchushopaoquan.png", "assets/img/portfolio/sp.png", "portfolio-details1.html", 1);
let project2 = new Project(2, "Web quản lí nhân viên", "assets/img/portfolio/login.png", "assets/img/portfolio/trangchu2.png", "portfolio-details2.html", 1);
let project3 = new Project(3, "Shop bán điện thoại online", "assets/img/portfolio/shopbandienthoai.png", "assets/img/portfolio/sp3.png", "portfolio-details3.html", 1);

projects.push(project1, project2, project3);
person.projects = projects;

let description_hoccachhoc = "Giúp bản thân tiếp thu kiến thức nhanh hơn, dễ dàng hơn.";
let description_kanban = "Là một phương pháp giúp quản lý quy trình làm việc bằng việc hiển thị các hạng mục công việc trong từng giai đoạn của quá trình từ việc cần làm, đang làm và đã hoàn thành. Trực quan hóa quy trình và giới hạn lượng công việc thực tế đi qua quy trình đó. Phương pháp này giúp bản thân hoàn thành tốt quy trình của dự án.";
let description_scrum = "Là một quy trình quản lý và phát triển theo phương pháp phát triển linh hoạt (Agile) tập trung đặc biệt vào việc quản lý các công việc trong một môi trường phát triển theo nhóm. Srum giúp bản thân biết làm việc theo nhóm và quản lý công việc tốt."

let hoccachhoc = new Certificate(1, "Học cách học", "7 ngày", description_hoccachhoc, "", "icofont-computer", 1);
let do_kanban = new Certificate(2, "Hoàn thành mọi việc với Kanban", "7 ngày", description_kanban, "", "icofont-chart-bar-graph", 1);
let scrum = new Certificate(2, "Scrum Essence", "7 ngày", description_scrum, "https://github.com/hungkunfu/chungchi_scrum/blob/master/tranduchung.pdf", "icofont-earth", 1);

certificates.push(hoccachhoc, do_kanban, scrum);
person.certificates = certificates;

let NguyenHuuAnhKhoa = new ReferencePerson(1, "Nguyễn Hữu Anh Khoa", "assets/img/testimonials/AnhKhoa.png", "Giám đốc đào tạo chi nhánh Huế", "CODEGYM VIETNAM JSC", "0935.216.417", "khoa.nguyen@codegym.vn", 1);
let NguyenThanhDanh = new ReferencePerson(2, "Nguyễn Thành Danh", "assets/img/testimonials/Anhdanh.png", "Tutor Bộ phận Đào tạo", "CODEGYM VIETNAM JSC", "0983.339.720", "danh.nguyen@codegym.vn", 1);

referencePersons.push(NguyenHuuAnhKhoa, NguyenThanhDanh);
person.referencePersons = referencePersons;