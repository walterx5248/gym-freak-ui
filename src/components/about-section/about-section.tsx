import { Component, h } from '@stencil/core';

@Component({
  tag: 'about-section',
  styleUrl: 'about-section.css',
  shadow: true,
})
export class AboutSection {
  render() {
    return (
      <div>
        <header class="section__container header__container">
          <div class="header__content">
            <span class="bg__blur"></span>
            <span class="bg__blur header__blur"></span>
            <h4>BEST FITNESS IN THE TOWN</h4>
            <h1>
              <span>MAKE</span> YOUR BODY SHAPE
            </h1>
            <p>
              Unleash your potential and embark on a journey towards a stronger, fitter, and more confident you.
              Sign up for 'Make Your Body Shape' now and witness the incredible transformation your body is capable of!
            </p>
            <button class="btn">Get Started</button>
          </div>
          <div class="header__image">
            <img src="assets/about2.webp" alt="header" />
          </div>
        </header>

        <section class="section__container explore__container">
          <div class="explore__header">
            <h2 class="section__header">EXPLORE OUR PROGRAM</h2>
            <div class="explore__nav">
              <span><i class="ri-arrow-left-line"></i></span>
              <span><i class="ri-arrow-right-line"></i></span>
            </div>
          </div>
          <div class="explore__grid">
            <div class="explore__card">
              <span><i class="ri-boxing-fill"></i></span>
              <h4>Strength</h4>
              <p>
                Embrace the essence of strength as we delve into its various dimensions physical, mental, and emotional.
              </p>
              <a href="#">Join Now <i class="ri-arrow-right-line"></i></a>
            </div>
            <div class="explore__card">
              <span><i class="ri-heart-pulse-fill"></i></span>
              <h4>Physical Fitness</h4>
              <p>
                It encompasses a range of activities that improve health, strength, flexibility, and overall well-being.
              </p>
              <a href="#">Join Now <i class="ri-arrow-right-line"></i></a>
            </div>
            <div class="explore__card">
              <span><i class="ri-run-line"></i></span>
              <h4>Fat Lose</h4>
              <p>
                Through a combination of workout routines and expert guidance, we'll empower you to reach your goals.
              </p>
              <a href="#">Join Now <i class="ri-arrow-right-line"></i></a>
            </div>
            <div class="explore__card">
              <span><i class="ri-shopping-basket-fill"></i></span>
              <h4>Weight Gain</h4>
              <p>
                Designed for individuals, our program offers an effective approach to gaining weight in a sustainable manner.
              </p>
              <a href="#">Join Now <i class="ri-arrow-right-line"></i></a>
            </div>
          </div>
        </section>

        <section class="section__container class__container">
          <div class="class__image">
            <span class="bg__blur"></span>
            <img src="assets/about1.jpeg" alt="class" class="class__img-2" />
          </div>
          <div class="class__content">
            <h2 class="section__header">THE CLASS YOU WILL GET HERE</h2>
            <p>
              Led by our team of expert and motivational instructors, "The Class You Will Get Here" is a
              high-energy, results-driven session that combines a perfect blend of cardio, strength training,
              and functional exercises. Each class is carefully curated to keep you engaged and challenged,
              ensuring you never hit a plateau in your fitness endeavors.
            </p>
            <button class="btn">Book A Class</button>
          </div>
        </section>

        <section class="section__container join__container">
          <h2 class="section__header">WHY JOIN US ?</h2>
          <p class="section__subheader">
            Our diverse membership base creates a friendly and supportive atmosphere, where you can make
            friends and stay motivated.
          </p>
          <div class="join__image">
            <img src="assets/about3.jpg" alt="Join" />
            <div class="join__grid">
              <div class="join__card">
                <span><i class="ri-user-star-fill"></i></span>
                <div class="join__card__content">
                  <h4>Personal Trainer</h4>
                  <p>Unlock your potential with our expert Personal Trainers.</p>
                </div>
              </div>
              <div class="join__card">
                <span><i class="ri-vidicon-fill"></i></span>
                <div class="join__card__content">
                  <h4>Practice Sessions</h4>
                  <p>Elevate your fitness with practice sessions.</p>
                </div>
              </div>
              <div class="join__card">
                <span><i class="ri-building-line"></i></span>
                <div class="join__card__content">
                  <h4>Good Management</h4>
                  <p>Supportive management, for your fitness success.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="section__container price__container">
          <h2 class="section__header">OUR PRICING PLAN</h2>
          <p class="section__subheader">
            Our pricing plan comes with various membership tiers, each tailored to cater to different preferences
            and fitness aspirations.
          </p>
          <div class="price__grid">
            <div class="price__card">
              <div class="price__card__content">
                <h4>Basic Plan</h4>
                <h3>$16</h3>
                <p>
                  <i class="ri-checkbox-circle-line"></i>
                  Smart workout plan
                </p>
                <p>
                  <i class="ri-checkbox-circle-line"></i>
                  At home workouts
                </p>
              </div>
              <button class="btn price__btn">Join Now</button>
            </div>
            <div class="price__card">
              <div class="price__card__content">
                <h4>Weekly Plan</h4>
                <h3>$25</h3>
                <p>
                  <i class="ri-checkbox-circle-line"></i>
                  PRO Gyms
                </p>
                <p>
                  <i class="ri-checkbox-circle-line"></i>
                  Smart workout plan
                </p>
                <p>
                  <i class="ri-checkbox-circle-line"></i>
                  At home workouts
                </p>
              </div>
              <button class="btn price__btn">Join Now</button>
            </div>
            <div class="price__card">
              <div class="price__card__content">
                <h4>Monthly Plan</h4>
                <h3>$45</h3>
                <p>
                  <i class="ri-checkbox-circle-line"></i>
                  ELITE Gyms & Classes
                </p>
                <p>
                  <i class="ri-checkbox-circle-line"></i>
                  PRO Gyms
                </p>
                <p>
                  <i class="ri-checkbox-circle-line"></i>
                  Smart workout plan
                </p>
                <p>
                  <i class="ri-checkbox-circle-line"></i>
                  At home workouts
                </p>
                <p>
                  <i class="ri-checkbox-circle-line"></i>
                  Personal Training
                </p>
              </div>
              <button class="btn price__btn">Join Now</button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
