<template>
    <div class="">
      <i>
        <slot name="thumbnails"></slot>
      </i>
      <div class="details">
        <h3>
          <slot name="heading"></slot>
        </h3>
        <slot></slot>
      </div>
    </div>
  </template>