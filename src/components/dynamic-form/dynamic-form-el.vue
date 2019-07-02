<template>
  <!-- 适配各种输入组件 -->
  <span v-if="!!input&&!!elData">
    <el-input-number
      v-if="elData.tagName=='el-input-number'"
      v-model="from[input].paramValue[elData.model]"
      :disabled="elData.disabled"
      @change="(v)=>{!!elData.changeName&&from[elData.changeName]&&from[elData.changeName](v)}"
      :min="elData.min"
      :max="elData.max"
      :step="elData.step"
      :precision="elData.precision"
      :controls="elData.controls"
      :placeholder="elData.placeholder"
      :class="elData.className"
      :style="elData.style"
    ></el-input-number>
    <el-slider
      v-if="elData.tagName=='el-slider'"
      v-model="from[input].paramValue[elData.model]"
      :disabled="elData.disabled"
      @change="(v)=>{!!elData.changeName&&from[elData.changeName]&&from[elData.changeName](v)}"
      :min="elData.min"
      :max="elData.max"
      :step="elData.step"
      :showInput="elData.showInput"
      :showInputControls="elData.showInputControls"
      :inputSize="elData.inputSize"
      :showStops="elData.showStops"
      :range="elData.range"
      :vertical="elData.vertical"
      :height="elData.height"
      :class="elData.className"
      :style="elData.style"
    ></el-slider>
    <el-switch
      v-if="elData.tagName=='el-switch'"
      v-model="from[input].paramValue[elData.model]"
      :disabled="elData.disabled"
      @change="(v)=>{!!elData.changeName&&from[elData.changeName]&&from[elData.changeName](v)}"
      :width="elData.width"
      :activeText="elData.activeText"
      :inactiveText="elData.inactiveText"
      :activeValue="elData.activeValue"
      :inactiveValue="elData.inactiveValue"
      :activeColor="elData.activeColor"
      :inactiveColor="elData.inactiveColor"
      :class="elData.className"
      :style="elData.style"
    ></el-switch>
    <el-cascader
      v-if="elData.tagName=='el-cascader'"
      :options="from[input][elData.optionName]"
      v-model="from[input].paramValue[elData.model]"
      :placeholder="elData.placeholder"
      :disabled="elData.disabled"
      :props="elData.props"
      :separator="elData.separator"
      :expandTrigger="elData.expandTrigger"
      :showAllLevels="elData.showAllLevels"
      :filterable="elData.filterable"
      :debounce="elData.debounce"
      :changeOnSelect="elData.changeOnSelect"
      :beforeFilter="elData.beforeFilter"
      @change="(v)=>{!!elData.changeName&&from[elData.changeName]&&from[elData.changeName](v)}"
      @activeItemChange="
        (v) => {
          !!elData.activeItemChangeName
          &&from[elData.activeItemChangeName]
          &&from[elData.activeItemChangeName](v)
        }
      "
      :class="elData.className"
      :style="elData.style"
      :clearable="elData.clearable"
    ></el-cascader>

    <el-select
      v-if="elData.tagName=='el-select'"
      v-model="from[input].paramValue[elData.model]"
      :placeholder="elData.placeholder"
      :disabled="elData.disabled"
      :multiple="elData.multiple"
      :valueKey="elData.valueKey"
      :collapseTags="elData.collapseTags"
      :multipleLimit="elData.multipleLimit"
      :allowCreate="elData.allowCreate"
      :filterable="elData.filterable"
      :filterMethod="elData.filterMethod"
      :remote="elData.remote"
      :remoteMethod="elData.remoteMethod"
      :loading="elData.loading"
      :defaultFirstOption="elData.defaultFirstOption"
      :popperAppendToBody="elData.popperAppendToBody"
      :class="elData.className"
      :style="elData.style"
      :clearable="elData.clearable"
    >
      <template v-if="!!elData.optionName&&!!from[input][elData.optionName]">
        <el-option
          v-for="itemSelectOption in from[input][elData.optionName]"
          :key="itemSelectOption.value"
          :label="itemSelectOption.label"
          :value="itemSelectOption.value"
        ></el-option>
      </template>
    </el-select>

    <el-radio-group
      v-if="elData.tagName=='el-radio'"
      v-model="from[input].paramValue[elData.model]"
      :disabled="elData.disabled"
      :class="elData.className"
      :style="elData.style"
      :border="elData.border"
    >
      <template v-if="!!elData.labelOptionName&&!!from[input][elData.labelOptionName]">
        <el-radio
          v-for="itemRadioOption in from[input][elData.labelOptionName]"
          :key="itemRadioOption"
          :label="itemRadioOption"
        ></el-radio>
      </template>
    </el-radio-group>
    <el-radio-group
      v-if="elData.tagName=='el-radio-button'"
      v-model="from[input].paramValue[elData.model]"
      :disabled="elData.disabled"
      :class="elData.className"
      :style="elData.style"
      :border="elData.border"
    >
      <template v-if="!!elData.labelOptionName&&!!from[input][elData.labelOptionName]">
        <el-radio-button
          v-for="itemRadioOption in from[input][elData.labelOptionName]"
          :key="itemRadioOption"
          :label="itemRadioOption"
        >{{itemRadioOption}}</el-radio-button>
      </template>
    </el-radio-group>

    <el-checkbox-group
      v-if="elData.tagName=='el-checkbox'"
      v-model="from[input].paramValue[elData.model]"
      :disabled="elData.disabled"
      :class="elData.className"
      :style="elData.style"
      :border="elData.border"
    >
      <template v-if="!!elData.labelOptionName&&!!from[input][elData.labelOptionName]">
        <el-checkbox
          v-for="itemcheckboxOption in from[input][elData.labelOptionName]"
          :key="itemcheckboxOption"
          :label="itemcheckboxOption"
        ></el-checkbox>
      </template>
    </el-checkbox-group>
    <el-checkbox-group
      v-if="elData.tagName=='el-checkbox-button'"
      v-model="from[input].paramValue[elData.model]"
      :disabled="elData.disabled"
      :class="elData.className"
      :style="elData.style"
      :border="elData.border"
    >
      <template v-if="!!elData.labelOptionName&&!!from[input][elData.labelOptionName]">
        <el-checkbox-button
          v-for="itemcheckboxOption in from[input][elData.labelOptionName]"
          :key="itemcheckboxOption"
          :label="itemcheckboxOption"
        >{{itemcheckboxOption}}</el-checkbox-button>
      </template>
    </el-checkbox-group>
    <el-input
      v-if="elData.tagName=='el-input'"
      v-model="from[input].paramValue[elData.model]"
      :type="elData.type"
      :rows="elData.rows"
      :autosize="elData.autosize"
      :placeholder="elData.placeholder"
      :disabled="elData.disabled"
      :class="elData.className"
      :style="elData.style"
      :clearable="elData.clearable"
    ></el-input>
    <span
      v-if="elData.tagName=='span'"
      :style="elData.style"
      :class="elData.className"
    >{{elData.name}}</span>
    <div
      v-if="elData.tagName=='div'"
      :style="elData.style"
      :class="elData.className"
    >{{elData.name}}</div>
    <el-date-picker
      v-if="elData.tagName=='el-date-picker'"
      v-model="from[input].paramValue[elData.model]"
      :type="elData.type"
      :placeholder="elData.placeholder"
      :disabled="elData.disabled"
      :startPlaceholder="elData.startPlaceholder"
      :endPlaceholder="elData.endPlaceholder"
      :format="elData.format"
      :valueFormat="elData.valueFormat"
      :rangeSeparator="elData.rangeSeparator"
      :style="elData.style"
      :class="elData.className"
    ></el-date-picker>
    <el-time-picker
      v-if="elData.tagName=='el-time-picker'"
      v-model="from[input].paramValue[elData.model]"
      :placeholder="elData.placeholder"
      :disabled="elData.disabled"
      :startPlaceholder="elData.startPlaceholder"
      :endPlaceholder="elData.endPlaceholder"
      :rangeSeparator="elData.rangeSeparator"
      :valueFormat="elData.valueFormat"
      :pickerOptions="elData.pickerOptions"
      :isRange="elData.isRange"
      :style="elData.style"
      :class="elData.className"
    ></el-time-picker>
    <el-button
      v-if="elData.tagName=='el-button'"
      :icon="elData.icon"
      :type="elData.type"
      :circle="elData.circle"
      :round="elData.round"
      :plain="elData.plain"
      :disabled="elData.disabled"
      :size="elData.size"
      @click="
        (v) => {
          !!elData.clickName
          &&!!from[elData.clickName]
          &&from[elData.clickName](from[input].name)
        }
      "
      :style="elData.style"
      :class="elData.className"
    >{{elData.name}}</el-button>
    <el-button-group v-if="elParentData.tagName=='el-button-group'" :style="elParentData.style">
      <el-button
        v-if="elData.tagName=='el-button'"
        :icon="elData.icon"
        :type="elData.type"
        :circle="elData.circle"
        :round="elData.round"
        :plain="elData.plain"
        :disabled="elData.disabled"
        :size="elData.size"
        @click="
          (v) => {
            !!elData.clickName
            &&!!from[elData.clickName]
            &&from[elData.clickName](from[input].name)
          }
        "
        :style="elData.style"
        :class="elData.className"
      >{{elData.name}}</el-button>
    </el-button-group>
  </span>
</template>

<script>
export default {
  name: 'dynamicFormEl',
  inject: ['target'],
  data() {
    return {
      from: this.target,
    };
  },
  props: {
    input: {
      type: String,
      required: true,
    },
    elData: {
      type: Object,
      required: true,
    },
    elParentData: {
      type: Object,
      required: true,
    },
  },
  computed: {},
  created() {},
  mounted() {},
  destroyed() {},
};
</script>
<style lang="less" scoped>
</style>
