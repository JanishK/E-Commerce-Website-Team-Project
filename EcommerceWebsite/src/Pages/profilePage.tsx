
import React from "react";

function Profile() {
  return (
    <>
    <main className="fd-main">
        <header className="fd-topbar">
          <div className="fd-topbarLeft">
            <h1 className="fd-title">Dashboard</h1>
            <p className="fd-subtitle">Welcome Janish</p>
          </div>

          <div className="fd-topbarRight">
            <button className="fd-notificationBtn" type="button" aria-label="Notifications">
              <span className="fd-bellIcon" aria-hidden="true" />
            </button>

            <button className="fd-userMenuBtn" type="button">
              <span className="fd-userAvatar" aria-hidden="true" />
              <span className="fd-userText">
                <span className="fd-userHello">Hello</span>
                <span className="fd-userName">Janish</span>
              </span>
              <span className="fd-caretIcon" aria-hidden="true" />
            </button>
          </div>
        </header>

        <section className="fd-content">
          <article className="fd-card fd-profileCard">
            <div className="fd-profileImageWrap">
              <img
                className="fd-profileImage"
                src="https://placehold.co/400x400"
                alt="Profile"
              />
            </div>

            <div className="fd-cardBody">
              <div className="fd-cardHeader">
                <h2 className="fd-cardTitle">My Profile</h2>
                <div className="fd-cardMeta">
                  <span className="fd-metaLabel">Last login</span>
                  <span className="fd-metaValue">17 Aug 2021 14:14</span>
                </div>
              </div>

              <div className="fd-profileDetails">
                <div className="fd-row">
                  <span className="fd-label">Name</span>
                  <span className="fd-value">Janish Kandel</span>
                </div>

                <div className="fd-row">
                  <span className="fd-label">Phone</span>
                  <span className="fd-value">+44 1234 567890</span>
                </div>

                <div className="fd-row">
                  <span className="fd-label">Email</span>
                  <span className="fd-value">janishk@corebyte.com</span>
                </div>
              </div>

              <div className="fd-divider" />

              <div className="fd-toggleRow">
                <span className="fd-toggleLabel">SMS alerts activation</span>
                <label className="fd-switch">
                  <input className="fd-switchInput" type="checkbox" defaultChecked />
                  <span className="fd-switchUi" aria-hidden="true" />
                </label>
              </div>

              <div className="fd-actions">
                <button className="fd-primaryBtn" type="button">
                  Save
                </button>
              </div>
            </div>
          </article>

          <div className="fd-rightCol">
            <article className="fd-card fd-accountsCard">
              <header className="fd-cardTop">
                <h2 className="fd-cardTitle">Recently Added Games</h2>

                <div className="fd-cardTools">
                  <button className="fd-iconBtn" type="button" aria-label="Search accounts">
                    <span className="fd-searchIcon" aria-hidden="true" />
                  </button>
                  <button className="fd-softBtn" type="button">
                    Edit
                  </button>
                </div>
              </header>

              <div className="fd-cardBody">
                <div className="fd-accountBlock">
                  <div className="fd-accountInfo">
                    <div className="fd-accountLabel">Active account</div>
                    <div className="fd-accountNumber">8040 6080 0808 4525</div>
                  </div>
                  <button className="fd-dangerBtn" type="button">
                    Block Account
                  </button>
                </div>

                <div className="fd-accountBlock">
                  <div className="fd-accountInfo">
                    <div className="fd-accountLabel">Blocked account</div>
                    <div className="fd-accountNumber">7182 5888 6201 2341</div>
                  </div>
                  <button className="fd-successBtn" type="button">
                    Unblock account
                  </button>
                </div>
              </div>
            </article>

            <article className="fd-card fd-billsCard">
              <header className="fd-cardTop">
                <h2 className="fd-cardTitle">Admin</h2>

                <div className="fd-cardTools">
                  <button className="fd-softBtn" type="button">
                    Filter by
                  </button>
                </div>
              </header>

              <div className="fd-cardBody">
                <ul className="fd-billsList">
                  <li className="fd-billItem">
                    <span className="fd-dot fd-dot--green" aria-hidden="true" />
                    <span className="fd-billName">Game 1</span>
                    <span className="fd-pill fd-pill--paid">Bill paid</span>
                  </li>

                  <li className="fd-billItem">
                    <span className="fd-dot fd-dot--orange" aria-hidden="true" />
                    <span className="fd-billName">Game 2</span>
                    <span className="fd-pill fd-pill--unpaid">Not paid</span>
                  </li>

                  <li className="fd-billItem">
                    <span className="fd-dot fd-dot--green" aria-hidden="true" />
                    <span className="fd-billName">Game 3</span>
                    <span className="fd-pill fd-pill--paid">Bill paid</span>
                  </li>

                  <li className="fd-billItem">
                    <span className="fd-dot fd-dot--green" aria-hidden="true" />
                    <span className="fd-billName">Game 4</span>
                    <span className="fd-pill fd-pill--paid">Bill paid</span>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}

export default Profile;