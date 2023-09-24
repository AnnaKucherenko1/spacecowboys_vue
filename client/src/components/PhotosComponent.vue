<template>
  <div class="wrapper">
    <h1>Title</h1>
    <p>Some text here...</p>
    <div class="image-container">
      <div
        v-for="(image, index) in images"
        :key="index"
        @click="openImage(image)"
        class="image-item"
      >
        <div class="image-square">
          <img :src="image" alt="Image" />
        </div>
      </div>
    </div>
    <div class="image-modal" v-if="isImageModalOpen">
      <span class="close-button" @click="closeImageModal">
        <i class="fa fa-times-circle" aria-hidden="true"></i>
      </span>
      <div>
        <div class="modal-content">
          <img
            :src="selectedImage"
            class="selected-image"
            alt="Selected Image"
          />
          <p>Well, this was amazing!</p>
        </div>
        <span class="nav-button prev" @click="showPrevImage">
          <i class="fa fa-chevron-circle-left" aria-hidden="true"></i>
          PREVIOUS IMAGE
        </span>
        <span class="nav-button next" @click="showNextImage">
          <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
          NEXT IMAGE
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamPage",
  data() {
    return {
      images: [
        require("@/assets/images/space/space (1).jpeg"),
        require("@/assets/images/space/space (2).jpeg"),
        require("@/assets/images/space/space (3).jpeg"),
        require("@/assets/images/space/space (4).jpeg"),
        require("@/assets/images/space/space (5).jpeg"),
        require("@/assets/images/space/space (6).jpeg"),
        require("@/assets/images/space/space (7).jpeg"),
        require("@/assets/images/space/space (8).jpeg"),
        require("@/assets/images/space/space (9).jpeg"),
        require("@/assets/images/space/space (10).jpeg"),
        require("@/assets/images/space/space (11).jpeg"),
        require("@/assets/images/space/space (12).jpeg"),
      ],
      selectedImage: null,
      isImageModalOpen: false,
      currentImageIndex: 0,
    };
  },
  methods: {
    openImage(image) {
      this.selectedImage = image;
      this.isImageModalOpen = true;
      console.log(this.selectedImage);
    },
    closeImageModal() {
      this.isImageModalOpen = false;
      this.selectedImage = null;
    },
    showPrevImage() {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--;
        this.selectedImage = this.images[this.currentImageIndex];
      }
    },
    showNextImage() {
      if (this.currentImageIndex < this.images.length - 1) {
        this.currentImageIndex++;
        this.selectedImage = this.images[this.currentImageIndex];
      }
    },
  },
};
</script>
<style>
.wrapper {
  height: 90vh;
  width: 100vw;
}
h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

p {
  font-size: 16px;
  margin-bottom: 30px;
}

.image-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.image-item {
  flex: 0 0 calc(16.666% - 10px);
  margin-bottom: 20px;
  position: relative;
  cursor: pointer;
}

.image-square {
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  overflow: hidden;
}

.image-square img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
}

/* .image-modal.show {
  display: block;
} */

.modal-content {
  /* position: absolute; */
  /* top: 50%;
  left: 50%; */
  /* transform: translate(-50%, -50%); */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  /* width: 60%;
  height: 60%; */
}

.close-button {
  /* position: absolute; */
  /* margin-top: 3%; */
  cursor: pointer;
  font-size: 24px;
  color: white;
  justify-content: center;
}

.nav-button {
  cursor: pointer;
  position: absolute;
  top: 50%;
  font-size: 24px;
  color: white;
  transform: translateY(-50%);
}
.selected-image {
  width: 70%;
  height: 40%;
}
.nav-button.prev {
  left: 10px;
}

.nav-button.next {
  right: 10px;
}
@media (max-width: 768px) {
  .image-item {
    flex: 0 0 calc(33.33% - 10px);
    margin-bottom: 20px;
    position: relative;
    cursor: pointer;
  }
}
</style>
