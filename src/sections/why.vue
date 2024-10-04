<template>
  <div class="about">
    <div class="about__row">
        <h1>
            Nega aynan Raqamli Texnologiyalar Markazi?
        </h1>

        <div class="about__card">
            <img src="../assets/images/degree.png" alt="">
            <h2 class="card__title">
                Sifatli ta'lim
            </h2>
            <p class="card__text">
                Doimiy yangilanib boradigan kurslar va katta tajribaga ega ustozlar.
            </p>
        </div>

        <div class="about__card">
            <img src="../assets/images/event.png" alt="">
            <h2 class="card__title">
              Qiziqarli tadbirlar
            </h2>
            <p class="card__text">
              Bizda doimiy ravishda qiziqarli tadbirlarda qatnshishingiz mumkin
            </p>
        </div>

        <div class="about__card">
            <img src="../assets/images/practice.png" alt="">
            <h2 class="card__title">
                Kursdan song Amaliyot
            </h2>
            <p class="card__text">
                Kurslarimizni tugatgandan so'ng amaliyot qilish imkoniyati.
            </p>
        </div>

        <div class="about__card">
            <img src="../assets/images/sertificate.png" alt="">
            <h2 class="card__title">
                Sertifikat
            </h2>
            <p class="card__text">
                Kursni muvaffaqiyatli tamomlagan o‘quvchilar “Raqamli Texnologiyalar Markazi”ning sertifikatiga ega bo‘ladi.
            </p>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.about {
  padding: 60px 20px;
  text-align: center;
  display: flex;
  justify-content: center;
}

.about__row {
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 40px;
}

.about__row h1 {
  width: 96%;
  font-size: 37px;
  font-weight: bold;
  color: #2c3e50;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: left;
}

.about__card {
  background-color: #fff;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  width: 45%;
  min-width: 300px;
  cursor: pointer;
  text-align: left;
  transition: transform 0.2s, box-shadow 0.3s;
}

.about__card:hover {
  transform: scale(1.01);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
}

.about__card img {
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
  object-fit: contain;
}

.card__title {
  font-size: 22px;
  font-weight: 600;
  color: #089124;
  margin-bottom: 15px;
  text-transform: capitalize;
}

.card__text {
  font-size: 16px;
  color: #7f8c8d;
  line-height: 1.6;
}

@media screen and(max-width: 960px) {
    .about__card {
        width: 100%;
    }
}

@media (max-width: 768px) {
  .about__row {
    flex-direction: column;
    align-items: center;
  }

  .about__card {
    width: 100%;
    margin-bottom: 30px;
  }

  .about__row h1 {
    font-size: 25px !important;
  }
}

</style>