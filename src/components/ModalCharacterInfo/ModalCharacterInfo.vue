<template>
  <div class="container__character-details">
    <div class="button__close" @click="closeModal()">&times;</div>
    <div class="grid__character-details">
      <div>
        <h1>
          {{ character_info.name }}
        </h1>
        <div class="card__character-information">
          INFORMATION
          <ul class="list__character-information">
            <li class="item__character-information">
              <h4>Real Name</h4>
              <h4>
                {{ character_info.biography.fullName }}
              </h4>
            </li>
            <li class="item__character-information">
              <h4>Ocuppation</h4>
              <h4>{{ character_info.work.occupation.split(",")[0] }}</h4>
            </li>
            <li class="item__character-information">
              <h4>Based In</h4>
              <h4>{{ character_info.work.base.split(",")[0] }}</h4>
            </li>
            <li class="item__character-information">
              <h4>Eye Color</h4>
              <h4>{{ character_info.appearance.eyeColor }}</h4>
            </li>
            <li class="item__character-information">
              <h4>Hair Colo</h4>
              <h4>{{ character_info.appearance.hairColor }}</h4>
            </li>
            <li class="item__character-information">
              <h4>Height</h4>
              <h4>{{ character_info.appearance.height }}</h4>
            </li>
            <li class="item__character-information">
              <h4>Weight</h4>
              <h4>{{ character_info.appearance.weight }}</h4>
            </li>
            <li class="item__character-information">
              <h4>First Apperance</h4>
              <h4>{{ character_info.biography.firstAppearance }}</h4>
            </li>
          </ul>
        </div>
      </div>
      <div class="wrapper__image">
        <img
          class="image__character"
          :src="character_info.images.lg"
          :alt="character_info.name"
        />
      </div>
    </div>
  </div>
</template>

<script src="./ModalCharacterInfo.js"></script>
<style scoped lang="scss" src="./ModalCharacterInfo.scss"></style>
