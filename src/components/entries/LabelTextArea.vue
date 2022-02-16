<template>
  <div>
    <label for="">{{ label }}</label>
    <b-form-textarea v-model="valueTemp" :placeholder="placeholder || label" :rows="rows"></b-form-textarea>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    rows: {
      type: [Number, String],
      default: 3
    },
    value: {
      type: String,
      default: ''
    }
  },
  watch: {
    valueTemp (value) {
      this.$emit('update:value', value)
    },
    value (value) {
      this.valueTemp = value
    }
  },
  data () {
    return {
      valueTemp: ''
    }
  }
}
</script>
