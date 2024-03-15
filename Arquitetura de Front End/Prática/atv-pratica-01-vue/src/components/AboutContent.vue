<template>
  <div class="about">
    <img alt="Dog" src="@/assets/dog.png" />
    <section class="info">
      <h1>Ítalo Médici</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </section>
  </div>
</template>

<style scoped>
img {
  width: 150px;
  aspect-ratio: 1 / 1;
  border-radius: 100%;
  object-fit: cover;
}
.about {
  display: grid;
  grid-template-columns: 150px 0.5fr;
  justify-content: center;
  align-items: center;
  gap: 48px;
  width: 100%;
  padding: 48px 24px;
  background-color: var(--primary-color);
}

h1 {
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 14px;
  color: #fff;
}

p {
  line-height: 1.5;
  color: #fff;
  opacity: 0.8;
  font-weight: 400;
}

@media (max-width: 768px) {
  .about {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 24px;
  }
}
</style>
