<template web>
  <div class="display">
    <div class="flex">
      <div>{{operator}}</div>
      <div class="total">{{total || '0'}}</div>
    </div>
    <div class="current">{{displayNumber || '0'}}</div>
  </div>
</template>

<template native>
  <StackLayout class="display">
    <FlexboxLayout class="flex">
      <Label :text="operator" />
      <Label class="total" :text="total || '0'" />
    </FlexboxLayout>
    <Label class="current" :text="displayNumber || '0'" />
  </StackLayout>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "Display",
  computed: mapGetters(["displayNumber", "total", "operator"])
};
</script>

<style scoped >
.display {
  text-align: right;
  background-color: #ba000d;
  margin-bottom: 10px;
  color: #ffffff;
  padding: 0 0.1em;
}

.current {
  font-size: 1.2em;
}

.total {
  flex-grow: 1;
}

.flex {
  display: flex;
  font-size: 0.9em;
}
</style>

<style scoped native>
.current {
  font-size: 50;
}

.flex {
  font-size: 30;
}
</style>