import "./ContactPage.css";


function ContactPage() {
  return (
    <div id="contactPage" className="page">
      <div className="pageContent">
        <div className="pageContent_Center">
          <div className="pageTitle">
            <span>04. - Contact me</span> <hr className="hrline" />
          </div>

          <div id="contactSection">
            <h1>Let's work together!</h1>
            <h2>Contact with me in one of the following channels:</h2>
          </div>

          <div id="contact">
            <div id="contactSelection">
              <div id="linkedIn">
                <a
                  href="https://www.linkedin.com/in/rich%C3%A1rd-szab%C3%B3/"
                  target="blank"
                >
                  <button>LinkedIn</button>
                </a>
              </div>
              <div id="email">
                <a href="mailto:hello@penguinweb.eu">
                  <button>E-mail</button>
                </a>
              </div>
            </div>
          </div>
          <div id="copyrightSection">
          <span>Penguinweb @ 2022</span>
          <span>Made with ❤️ by Richard Szabo</span>

          </div>
      
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
