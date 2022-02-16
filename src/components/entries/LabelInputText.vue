<template>
  <div>
    <label for="">{{ label }}</label>
    <b-form-input v-model="valueTemp" :placeholder="placeholder || label"></b-form-input>
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
