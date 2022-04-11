import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import "../../src/assets/css/blomal_ar.css";
import logo from "../assets/img/logo.png";
import main from "../assets/img/thumb.png";
import goal1 from "../assets/img/goals/1.png";
import goal2 from "../assets/img/goals/2.png";
import goal3 from "../assets/img/goals/3.png";
import goal4 from "../assets/img/goals/4.png";
import goal5 from "../assets/img/goals/5.png";

import how1 from "../assets/img/howitworks/1.png";
import how2 from "../assets/img/howitworks/2.png";
import how3 from "../assets/img/howitworks/3.png";
import how4 from "../assets/img/howitworks/4.png";

import howrect1 from "../assets/img/howitworks/rect1.png";
import howrect2 from "../assets/img/howitworks/rect2.png";
import howrect3 from "../assets/img/howitworks/rect3.png";
import howrect4 from "../assets/img/howitworks/rect4.png";

import faq from "../assets/img/faq.png";
import uk from "../assets/img/uk.png";

export default function LandingAr() {
  window.onload = function () {
    document.querySelector(".showbox").style.opacity = "0";
    document.querySelector(".showbox").style.zIndex = "-1";
  };
  // const shoot = () => {
  //   document.querySelector(".email-section").classList.add("fold-up");
  //   document.getElementById("success").classList.add("mt-0");
  // };
  return (
    <div className="">
      {/* mainHeader */}
      <div class="showbox">
        <div class="loader">
          <svg class="circular" viewBox="25 25 50 50">
            <circle
              class="path"
              cx="50"
              cy="50"
              r="20"
              fill="none"
              stroke-width="2"
              stroke-miterLimit="10"
            />
          </svg>
        </div>
      </div>

      <section className="mainHeader" id="Home">
        <div className="container-fluid m-auto">
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <a className="navbar-brand" href="/">
                <img src={logo} alt="goal" />
              </a>
              <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link" href="#Join">
                      انضم
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#About">
                      عن بلومال
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#HowItWorks">
                      كيف نعمل
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#Faq">
                      أسئلة متكررة
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#Contact">
                      اتصل بنا
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link en" href="#Contact">
                      English
                      <img src={uk} className="lang" alt="English" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="row justify-content-center my-5 py-5">
            <div className="col-md-12 text-center m-auto">
              <h5 className="secondaryC mb-3">
                أصبح الاستثمار أسهل وأكثر ربحية مع بلومال
              </h5>
              <h2 className="primaryC mb-3 fa-3x">
                استثمر بأمان ودون أي خبرة مسبقة
              </h2>
              <p className="mb-5">
                تقدر الآن تبدأ بناء محفظتك وتستثمر وتبني ثروتك بمبلغ 1000 ريال
                سعودي فقط
              </p>
            </div>

            {/* <div className="col-md-4">
              <div class="registration-form">
                <header>
                  <h3 className="m-0">Join us</h3>
                  <p>Join our waiting List</p>
                </header>
                <div class="input-section email-section">
                  <input
                    class="email"
                    type="email"
                    placeholder="Enter your email"
                    autocomplete="off"
                  />
                  <div class="animated-button">
                    <button class="btn btn-success" onClick={shoot}>
                      <h3 className="text-white">Join</h3>
                    </button>
                  </div>
                </div>
                <div className="success" id="success">
                  <p>Thanks for Joining us.</p>
                </div>
              </div>
            </div> */}
            <div className="container pt-5" id="Join">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <form class="modernForm">
                    <div className="row">
                      <div class="col-md-12 mb-3">
                        <h3>انضم لقائمة الانتظار</h3>
                      </div>
                      <div class="col-md-6 group">
                        <input type="text" required></input>
                        <span class="bar"></span>
                        <label>الأسم الاول</label>
                      </div>
                      <div class="col-md-6 group">
                        <input type="text" required></input>
                        <span class="bar"></span>
                        <label>الأسم الاخير</label>
                      </div>
                      <div class="col-md-6 group">
                        <input type="email" required></input>
                        <span class="bar"></span>
                        <label>الايميل</label>
                      </div>
                      <div class="col-md-6 group">
                        <input type="text" required></input>
                        <span class="bar"></span>
                        <label>الهاتف</label>
                      </div>
                      <div class="col-md-12 text-end">
                        <button className="btn btn-primary">
                          ارسال <i className="fa fa-paper-plane text-white"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="About">
        <div className="container pt-5">
          <div className="row justify-content-center">
            <div className="col-md-6 m-auto">
              <img src={main} alt="goal" className="w-100" />
            </div>
            <div className="col-md-6 m-auto about">
              <h3 className="mb-4">عن بلومال</h3>
              <p className="d-flex">
                <i className="fa fa-check"></i> بلومال هي خدمة لإدارة الاستثمار
                الرقمي
              </p>
              <p className="d-flex">
                <i className="fa fa-check"></i> نقوم بإنشاء محافظ شخصية لمساعدة
                المستثمرين على تحقيق أهدافهم طويلة المدى مع عوائد محسّنة للمخاطر
              </p>
              <p className="d-flex">
                <i className="fa fa-check"></i> نحن نساعدك على الاستثمار في
                محافظ متنوعة بالكامل مكونة من صناديق المؤشرات منخفضة التكلفة عبر
                ستة فئات من الأصول المختلفة وذلك بناءً على ملف المخاطر الخاص بك.
                كما نستخدم طرق علمية متقدمة تقيس مدى المخاطر المستهدف مقابل
                العائد المطلوب إلى جانب التكنولوجيا المتقدمة لتبسيط تجربة
                الاستثمار بأكملها عن طريق إنشاء واختيار المحفظة الاستثمارية
                الملائمة للفرد بالاضافة لإعادة التوازن التلقائي وإعادة استثمار
                الأرباح
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <The_right_way */}
      <section className="theRight text-center pt-5 my-3">
        <div className="container-fluid">
          <h3>أنت تستحق محفظة استثمارية تتناسب مع طموحاتك وأهدافك</h3>
          <p>
            لكل شخص أهداف مختلفة عندما يتعلق الأمر بحياته وأمواله وخططه
            الاستثمارية.
          </p>
          <div className="d-flex justify-content-center">
            <div className="goalBlock">
              <img src={goal4} alt="goal" />
              <p>تقاعد مبكرا</p>
            </div>

            <div className="goalBlock">
              <img src={goal2} alt="goal" />
              <p>تملك منزل</p>
            </div>
            <div className="goalBlock">
              <img src={goal5} alt="goal" />
              <p>الادخار لتعليم الاطفال</p>
            </div>
            <div className="goalBlock">
              <img src={goal3} alt="goal" />
              <p>التخطيط لمصاريف الزواج</p>
            </div>
            <div className="goalBlock">
              <img src={goal1} alt="goal" />
              <p>الادخار لتجربة رحلة العمر</p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="JoinUs py-5" id="Join">
      <div className="container my-3">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div class="registration-form">
              <header>
                <h3 className="m-0">Join us</h3>
                <p>Join our waiting List</p>
              </header>
              <div class="input-section email-section">
                <input
                  class="email"
                  type="email"
                  placeholder="Enter your email"
                  autocomplete="off"
                />
                <div class="animated-button">
                  <button class="btn btn-success" onClick={shoot}>
                    <h3 className="text-white">Join</h3>
                  </button>
                </div>
              </div>
              <div className="success" id="success">
                <p>Thanks for Joining us.</p>
              </div>
            </div>
          </div>
        </div>
      </div></section> */}
      {/* how it works */}
      <section className="howitworks text-center pt-5 my-3" id="HowItWorks">
        <img src={howrect1} alt="how" className="howrect1" />
        <img src={howrect3} alt="how" className="howrect3" />
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4">
              <h3>كيف نعمل</h3>
              <p>إدارة الاستثمار الآلي</p>
            </div>
            <div className="col-md-3">
              <div className="howBlock">
                <p className="secondaryC">الخطوة ١</p>
                <img src={how1} alt="how" />
                <p className="my-3 secondaryC text-uppercase">
                  الإجابة على الاستبيان
                </p>
                <p className="m-0">
                  أجب عن بعض الأسئلة لتقييم مدى تحملك لمخاطر الاستثمار
                </p>
              </div>
            </div>
            <div className="col-md-3 position-relative">
              <img src={howrect2} alt="how" className="howrect2" />
              <div className="howBlock">
                <p className="secondaryC">الخطوة ٢</p>
                <img src={how2} alt="how" />
                <p className="my-3 secondaryC">الاطلاع على المحفظة المقترحة</p>
                <p className="m-0">
                  تعرف على محفظتك العالمية المتنوعة من صناديق الاستثمار
                  المتداولة مع التركيز طويل الأجل على العوائد المحسّنة مقابل
                  المخاطر
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="howBlock">
                <p className="secondaryC">الخطوة ٣</p>
                <img src={how3} alt="how" />
                <p className="my-3 secondaryC">إنشاء حساب</p>
                <p className="m-0">
                  تفضل بالاطلاع على مشورتك الاستثمارية المقدمة من بلومال مع
                  التوقيع على الشروط والأحكام ودع لنا عملية تأسيس محفظتك
                  الاستثمارية مع شريك محلي موثوق
                </p>
                <img src={howrect4} alt="how" className="howrect4" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="howBlock">
                <p className="secondaryC">الخطوة ٤</p>
                <img src={how4} alt="how" />
                <p className="my-3 secondaryC">استثمر</p>
                <p className="m-0">
                  استثمر في محافظ Blomal المقترحة أو المفضلة لديك مقابل رسوم
                  منخفضة وحدد أي استراتيجيات جديدة مستقبلية تريدها
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faqBlock position-relative pt-5" id="Faq">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4">
              <h3 className="text-center mb-5">أسئلة متكررة</h3>
              <img src={faq} alt="faq" className="faq" />
              <Accordion>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>ماهو بلومال</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      ● عبارة عن منصة رقمية توفر خدمات استثمار تلقائية تعتمد على
                      الخوارزميات مع الحد الأدنى من التدخل البشري.
                    </p>
                    <p>
                      ● بلومال تعمل على أتمتة وتحسين استراتيجيات الاستثمار الغير
                      نشط معتمدا على نظرية المحفظة الحديثة.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      ما هي الاستثمارات التي يقدمها بلومال؟
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      لكل هدف من أهدافك المالية ، توصي بلومال بتخصيص محفظة محددة
                      لاستراتيجية المحفظة التي نوصي بها. تم تصميم إستراتيجية
                      المحفظة هذه لتعكس إجمالي عوائد الأسواق العالمية وذلك
                      للمساعدة في تعظيم العوائد المتوقعة مع تقليل المخاطر.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      أهمية الاستثمار المركب طويل الأجل؟
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      المضاعفة المالية هي قدرة الأصل على تحقيق أرباح ، والتي يتم
                      إعادة استثمارها بعد ذلك أو تظل مستثمرة بهدف تحقيق أرباحها
                      الخاصة. بمعنى آخر ، يشير المركب إلى تحقيق أرباح من الأرباح
                      السابقة. إن عجائب المضاعفة (تسمى أحيانًا "الفائدة
                      المركبة") لديها القدرة على تحويل أموال العمل الخاصة بك إلى
                      أداة مدرة للدخل. المضاعفة هي عملية تحقيق أرباح على أرباح
                      الأصول المعاد استثمارها يتطلب الأمر ثلاثة أشياء: <br />
                      يظل الاستثمار الأصلي مستثمرًا <br />
                      إعادة استثمار الأرباح والوقت
                      <br />
                      وكلما زاد الوقت الذي تمنحه لاستثماراتك زادت قدرتك على
                      تسريع الدخل المحتمل لاستثمارك الأصلي.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Dollar-Cost Averaging or Lump Sum Investing?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      يقوم مبدأ متوسط التكلفة بالدولار (DCA) ، باستثمارات مجدولة
                      بانتظام في صندوق استثمار على مدى فترة طويلة من الزمن. على
                      سبيل المثال ، استثمار مبلغ مساوٍ في اليوم الخامس عشر من كل
                      شهر. يعد هذا النهج مفيد جدا لتفادي توقيت الاستثمار الخاطئ
                      كما يعمل هذا المبدأ على تقليل مخاطر السوق و يساعد على ضمان
                      عوائد مجزية
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      هل يمكنني إخراج أموالي إذا أردت ذلك؟
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>نعم ، يمكنك سحب أموالك في أي وقت بدون رسوم</p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      <section id="Contact">
        <div className="container mb-5 pt-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <form class="modernForm">
                <div className="row">
                  <div class="col-md-12 mb-3">
                    <h3>اتصل بنا</h3>
                  </div>
                  <div class="col-md-6 group">
                    <input type="text" required></input>
                    <span class="bar"></span>
                    <label>الأسم الاول</label>
                  </div>
                  <div class="col-md-6 group">
                    <input type="text" required></input>
                    <span class="bar"></span>
                    <label>الأسم الاخير</label>
                  </div>
                  <div class="col-md-6 group">
                    <input type="email" required></input>
                    <span class="bar"></span>
                    <label>الايميل</label>
                  </div>
                  <div class="col-md-6 group">
                    <input type="text" required></input>
                    <span class="bar"></span>
                    <label>الهاتف</label>
                  </div>
                  <div class="col-md-12 group">
                    <textarea type="text" required></textarea>
                    <span class="bar"></span>
                    <label>نص الرسالة</label>
                  </div>
                  <div class="col-md-12 text-end">
                    <button className="btn btn-primary">
                      <i className="fa fa-paper-plane text-white"></i> ارسال
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="waitingApproval">
        <div className="container m-auto">
          <p className=" text-white">
            بلومال كابيتال هي شركة ذات مسؤولية محدودة بسجل تجاري رقم 4030443697
            بموجب إجراءات الحصول على تصريح من هيئة السوق المالية.
          </p>
        </div>
      </section>

      <footer>
        <div className="container m-auto p-3">
          <p className="text-center m-0">© 2022 حقوق النشر محفوظة لبلومال</p>
        </div>
      </footer>
    </div>
  );
}
