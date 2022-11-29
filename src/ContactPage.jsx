import "./ContactPage.css";

function ContactPage() {

  

  return (
    <div id="contactPage" className="page">
      <div className="pageContent lazyLoad">
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
                <button
                  onClick={() =>
                    (window.location.href =
                      "https://www.linkedin.com/in/szabo-richard/")
                  }
                >
                  LinkedIn
                </button>
              </div>
              <div id="email">
                <button
                  onClick={() =>
                    (window.location.href = "mailto:hello@penguinweb.eu")
                  }
                >
                  E-mail
                </button>
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
