
export const formObj = {
  paramValue: { //  必须有 命名不可变 // 提交表单的参值 不能有子对象
    startDate: '',
    endDate: '',
  },
  rules: { //  必须有 命名不可变
    //  name: [
    //    { required: true, message: '请输入活动名称', trigger: 'blur', },
    //    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur', },
    //  ],
    endDate: [
      {
        type: 'date',
        required: true,
        message: '请选择结束日期',
        trigger: 'change',
      },
    ],
    startDate: [
      {
        type: 'date',
        required: true,
        message: '请选择开始时间',
        trigger: 'change',
      },

    ],
  },
  refObj: null, //  表单ref对象
  name: 'formObj', //  表单名称
  formConfig: { //  必须有 命名不可变
    inline: true, //  是否是行内表单
    size: 'mini',
    span: 24, //  格栅数，总共24, inline=false起作用
    className: '',
    hideRequiredAsterisk: true, // 是否隐藏必填字段的标签旁边的红色星号
    labelPosition: 'right', // 表单域标签的位置right/left/top，如果值为 left 或者 right 时，则需要设置 label-width
    labelWidth: '', // 表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 auto。
    labelSuffix: '', // 表单域标签的后缀
    showMessage: true, // 是否显示校验错误信息
    inlineMessage: false, // 是否以行内形式展示校验信息
    statusIcon: false, // 是否在输入框中显示校验结果反馈图标
    formItems: [
      {
        span: 8,
        prop: 'startDate',
        label: '日期选择',
        size: 'mini',
        labelWidth: 'auto', // 100px and so on || auto

        tagName: 'el-date-picker',
        type: 'date', // year/month/date/dates/ week/datetime/datetimerange/ daterange/monthrange
        placeholder: '开始日期',
        model: 'startDate', // 限制只有一层
        disabled: false, // 是否禁用
        startPlaceholder: '', // 范围选择时开始日期的占位内容
        endPlaceholder: '', // 范围选择时结束日期的占位内容
        format: '', // 显示在输入框中的格式
        valueFormat: '', // 可选，绑定值的格式,不指定则绑定值为 Date 对象
        rangeSeparator: '', // 选择范围时的分隔符
        className: '',
      },
      {
        span: 8,
        prop: 'endDate',
        label: '至',
        size: 'mini',
        labelWidth: 'auto', // 100px and so on || auto
        tagName: 'el-date-picker',
        type: 'date',
        placeholder: '结束日期',
        model: 'endDate', // 限制只有一层
        disabled: false, // 是否禁用
        className: '',
      },
      {
        span: 8,
        tagName: 'div', // el-button el-button-group span div 按钮 按钮组 只是为了布局的
        child: [
          {
            tagName: 'el-button',
            name: '查询',
            type: 'primary', // primary '' info warning danger success text
            circle: false, // 圆形按钮
            icon: '', // 图标
            round: false, // 圆角按钮
            plain: false, // 朴素按钮
            disabled: false, // 是否禁用
            loading: false,
            size: '', // medium / small / mini
            clickName: 'onSubmit', // 调用的方法名
            className: '',
          },
          {
            // 以下才是输入组件信息
            tagName: 'span',
            name: ' ',
            style: {
              padding: '0px 0px',
            },
            className: '',
          },
          {
            tagName: 'el-button',
            name: '重置',
            type: '', // primary '' info warning danger success text
            circle: false, // 圆形按钮
            icon: '', // 图标
            round: false, // 圆角按钮
            plain: false, // 朴素按钮
            disabled: false, // 是否禁用
            loading: false,
            size: '', // medium / small / mini
            clickName: 'onReset', // 调用的方法名
            className: '',
          },
        ],
      },
    ],
  },

};

export const formObj1 = {
  paramValue: { // 必须有 命名不可变 // 提交表单的参值 不能有子对象
    name: '',
    dateRange: '', // 时间范围[date1,date2]
    date1: '',
    time1: '',
    topicTime: '',
    topicDate: '',
    address: '',
    topic: [],
    baoche: false,
    desc: '',
    peopleNum: 1,
    totalHorse: '',
    radio1: '单选1',
    checkbox1: [],
  },
  rules: { // 必须有 命名不可变
    name: [
      {
        type: 'string',
        required: true,
        message: '请输入活动名称',
        trigger: 'blur',
      },
      {
        min: 3,
        max: 5,
        message: '长度在 3 到 5 个字符',
        trigger: 'blur',
      },
    ],
    dateRange: [
      {
        type: 'array',
        required: true,
        message: '请选择日期范围',
        trigger: 'blur',
      },
    ],
    topicDate: [
      {
        type: 'string',
        required: true,
        message: '请选择活动日期',
        trigger: 'change',
      },
    ],
    topicTime: [
      {
        type: 'date',
        required: true,
        message: '请选择活动时间',
        trigger: 'change',
      },
    ],
    address: [
      {
        required: true,
        message: '请选择活动地址',
        trigger: 'change',
      },
    ],
  },

  // 其他选项数据配置
  addressOptions: [ // select样例
    { label: '广州', value: 'GZ' },
    { label: '深圳', value: 'SZ' },
    { label: '重庆', value: 'CQ' },
  ],
  topicOptions: [
    {
      value: 'tiyu',
      label: '体育',
      children: [
        {
          value: 'qiulei',
          label: '球类',
          children: [{
            value: 'zuqiu',
            label: '足球',
          }, {
            value: 'lanqiu',
            label: '篮球',
          },
          ],
        },
        {
          value: 'tianjing',
          label: '田径',
          children: [{
            value: '100mduanpao',
            label: '100m短跑',
          }, {
            value: '50mduanpao',
            label: '50米短跑',
          },
          ],
        },
      ],
    },
    {
      value: 'huwai',
      label: '户外',
      children: [
        {
          value: 'qinzi',
          label: '亲子',
          children: [{
            value: 'shaokao',
            label: '烧烤',
          }, {
            value: 'tubu',
            label: '徒步',
          },
          ],
        },
      ],
    },
  ],
  radioLabelOptions: ['单选1', '单项2'],
  checkboxLabelOptions: ['多选1', '多选2', '多选3', '多选4', '多选5'],
  refObj: null, // 表单ref对象
  name: 'formObj1', // 表单名称
  formConfig: { // 必须有 命名不可变
    inline: false, // 是否是行内表单
    size: 'mini',
    span: 24, // 格栅数，总共24, inline=false起作用
    className: '',
    hideRequiredAsterisk: false, // 是否隐藏必填字段的标签旁边的红色星号
    labelPosition: 'right', // 表单域标签的位置right/left/top，如果值为 left 或者 right 时，则需要设置 label-width
    labelWidth: '100px', // 表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 auto。
    labelSuffix: '', // 表单域标签的后缀
    showMessage: true, // 是否显示校验错误信息
    inlineMessage: false, // 是否以行内形式展示校验信息
    statusIcon: false, // 是否在输入框中显示校验结果反馈图标
    formItems: [
      {
        span: 12,
        prop: 'name',
        label: '活动名称',
        size: 'mini', // medium / small / mini
        labelWidth: 'auto', // 100px and so on || auto

        tagName: 'el-input',
        type: 'text', // text，textarea 和其他 原生 input 的 type 值
        placeholder: '请输入活动名称',
        model: 'name', // 限制只有一层
        disabled: false, // 是否禁用
        rows: 2, // 输入框行数，只对 type="textarea" 有效
        autosize: false, // 自适应内容高度，只对 type="textarea" 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }
        className: 'input-text-demo',
        clearable: true,
      },
      {
        span: 12,
        prop: 'dateRange',
        label: '日期范围',
        size: 'mini',
        labelWidth: 'auto', // 100px and so on || auto

        tagName: 'el-date-picker',
        type: 'daterange', // year/month/date/dates/ week/datetime/datetimerange/ daterange/monthrange
        placeholder: '日期范围',
        model: 'dateRange', // 限制只有一层
        disabled: false, // 是否禁用
        startPlaceholder: '开始日期', // 范围选择时开始日期的占位内容
        endPlaceholder: '结束日期', // 范围选择时结束日期的占位内容
        format: '', // 显示在输入框中的格式
        valueFormat: '', // 可选，绑定值的格式,不指定则绑定值为 Date 对象
        rangeSeparator: '至', // 选择范围时的分隔符
        className: '',
      },
      {
        span: 12,
        prop: 'date1',
        label: '日期时间选择',
        size: 'mini',
        labelWidth: 'auto', // 100px and so on || auto

        tagName: 'el-date-picker',
        type: 'datetime', // year/month/date/dates/ week/datetime/datetimerange/ daterange/monthrange
        placeholder: '日期时间',
        model: 'date1', // 限制只有一层
        disabled: false, // 是否禁用
        startPlaceholder: '', // 范围选择时开始日期的占位内容
        endPlaceholder: '', // 范围选择时结束日期的占位内容
        format: '', // 显示在输入框中的格式
        valueFormat: 'yyyy-MM-dd HH:mm:ss', // 可选，绑定值的格式,不指定则绑定值为 Date 对象
        rangeSeparator: '', // 选择范围时的分隔符
        className: '',
      },
      {
        span: 12,
        prop: 'time1',
        label: '时间选择',
        size: 'mini',
        labelWidth: 'auto', // 100px and so on || auto

        tagName: 'el-time-picker',
        placeholder: '时间',
        model: 'time1', // 限制只有一层
        disabled: false, // 是否禁用
        isRange: false, // 是否为时间范围选择，仅对<el-time-picker>有效
        startPlaceholder: '', // 范围选择时开始日期的占位内容
        endPlaceholder: '', // 范围选择时结束日期的占位内容
        valueFormat: '', // 可选，绑定值的格式,不指定则绑定值为 Date 对象 // HH:mm:ss
        rangeSeparator: '', // 选择范围时的分隔符
        pickerOptions: '', // 当前时间日期选择器特有的选项参考下表 Object
        className: '',
      },
      {
        span: 24,
        prop: 'topicDateTime',
        label: '活动时间',
        size: 'mini',
        tagName: '',
        child: [
          {

            prop: 'topicDate', // 套一个form-item

            // 以下才是输入组件信息
            tagName: 'el-date-picker',
            type: 'date', // year/month/date/dates/ week/datetime/datetimerange/ daterange/monthrange
            placeholder: '日期',
            model: 'topicDate', // 限制只有一层
            disabled: false, // 是否禁用
            valueFormat: 'yyyy-MM-dd', // 可选，绑定值的格式,不指定则绑定值为 Date 对象
            className: '',
          },
          {

            // 以下才是输入组件信息
            tagName: 'span',
            name: ' - ',
            style: {
              padding: '0px 0px',
            },
            className: '',
          },
          {
            prop: 'topicTime', // 套一个form-item

            // 以下才是输入组件信息
            tagName: 'el-time-picker',
            placeholder: '时间',
            model: 'topicTime', // 限制只有一层
            disabled: false, // 是否禁用
            valueFormat: '', // 可选，绑定值的格式,不指定则绑定值为 Date 对象 // HH:mm:ss
            pickerOptions: '', // 当前时间日期选择器特有的选项参考下表 Object
            className: '',
          },
        ],
      },

      {
        span: 12,
        prop: 'address',
        label: '活动地址',
        size: 'mini', // medium / small / mini
        labelWidth: 'auto', // 100px and so on || auto

        tagName: 'el-select',
        model: 'address', // 限制只有一层
        placeholder: '请选择活动地址',
        disabled: false, // 是否禁用

        optionName: 'addressOptions', // 此el-select 的选项数据key

        multiple: false,
        valueKey: '', // 作为 value 唯一标识的键名，绑定值为对象类型时必填
        collapseTags: false, // 多选时是否将选中值按文字的形式展示
        multipleLimit: 0, // 多选时用户最多可以选择的项目数，为 0 则不限制
        filterable: false, // 是否可搜索
        allowCreate: false, // 是否允许用户创建新条目，需配合 filterable 使用
        filterMethod: () => {}, // 自定义搜索方法
        remote: false, // 是否为远程搜索
        remoteMethod: () => {}, // 远程搜索方法
        loading: false, // 是否正在从远程获取数据
        defaultFirstOption: false, // 在输入框按下回车，选择第一个匹配项。需配合 filterable 或 remote 使用
        popperAppendToBody: true, // 是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为false

        className: '',
        clearable: true,
      },
      {
        span: 12,
        prop: 'baoche',
        label: '包车',
        size: 'mini', // medium / small / mini
        labelWidth: 'auto', // 100px and so on || auto

        tagName: 'el-switch',
        model: 'baoche', // 限制只有一层 // boolean / string / number
        disabled: false, // 是否禁用

        width: 40, // switch 的宽度（像素） number
        activeText: '', // switch 打开时的文字描述
        inactiveText: '', // switch 关闭时的文字描述
        activeValue: true, // switch 打开时的值 boolean / string / number
        inactiveValue: false, // switch 关闭时的值 boolean / string / number
        activeColor: '', // switch 打开时的背景色 #409EFF
        inactiveColor: '', // switch 关闭时的背景色 #C0CCDA

        changeName: '', // switch 状态发生变化时的回调函数的名字

        className: '',
      },

      {
        span: 24,
        prop: 'topic',
        label: '活动分类',
        size: 'mini', // medium / small / mini
        labelWidth: 'auto', // 100px and so on || auto

        tagName: 'el-cascader',
        model: 'topic', // 限制只有一层
        placeholder: '请选择活动分类',
        disabled: false, // 是否禁用

        optionName: 'topicOptions', // 此el-select 的选项数据key

        props: {}, // 可选项数据源的键名配置
        separator: '/', // 选项分隔符
        expandTrigger: 'click', // 次级菜单的展开方式click/hover
        showAllLevels: true, // 输入框中是否显示选中值的完整路径
        filterable: false, // 是否可搜索选项
        debounce: 300, // 搜索关键词输入的去抖延迟，毫秒
        changeOnSelect: false, // 是否允许选择任意一级的选项
        beforeFilter: () => {}, // 筛选之前的钩子，参数为输入的值，若返回 false 或者返回 Promise 且被 reject，则停止筛选
        changeName: 'cascaderChange', // 当绑定值变化时触发的事件绑定的函数名称
        activeItemChangeName: '', // 当父级选项变化时触发的事件绑定的函数名称，仅在 change-on-select 为 false 时可用

        className: '',
        clearable: true,
      },
      {
        span: 10,
        prop: 'peopleNum',
        label: '人数',
        size: 'mini', // medium / small / mini
        labelWidth: 'auto', // 100px and so on || auto

        tagName: 'el-slider',
        model: 'peopleNum', // 限制只有一层
        disabled: false, // 是否禁用

        min: 1, // 最小值
        max: 100, // 最大值
        step: 1, // 步长
        showInput: false, // 是否显示输入框，仅在非范围选择时有效
        showInputControls: true, // 在显示输入框的情况下，是否显示输入框的控制按钮
        inputSize: 'mini', // 输入框的尺寸large/medium/small/mini
        showStops: false, // 是否显示间断点
        range: false, // 是否为范围选择
        vertical: false, // 是否竖向模式
        height: '', // Slider 高度，竖向模式时必填 100px

        changeName: '', // 值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）绑定的函数名称

        className: '',
      },

      {
        span: 24,
        prop: 'totalHorse',
        label: '活动耗时',
        size: 'mini', // medium / small / mini
        labelWidth: 'auto', // 100px and so on || auto

        tagName: 'el-input-number',
        model: 'totalHorse', // 限制只有一层
        disabled: false, // 是否禁用

        min: 1, // 最小值
        max: 100, // 最大值
        step: 1, // 步长
        precision: 0, // 数值精度Number
        controls: true, // 是否使用控制按钮
        placeholder: '', // 输入框默认placeholder

        changeName: '', // 值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）绑定的函数名称

        className: '',
      },
      {
        span: 24,
        prop: 'desc',
        label: '活动描述',
        size: 'mini', // medium / small / mini
        labelWidth: 'auto', // 100px and so on || auto

        tagName: 'el-input',
        type: 'textarea', // text textarea 和其他 原生 input 的 type 值
        placeholder: '请输入活动描述',
        model: 'desc', // 限制只有一层
        disabled: false, // 是否禁用
        rows: 2, // 输入框行数，只对 type="textarea" 有效
        autosize: { minRows: 2 },
        // 自适应内容高度，只对 type="textarea" 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }
        className: '',
        clearable: true,
      },
      {
        span: 12,
        prop: 'radio1',
        label: '单选',
        size: 'mini', // medium / small / mini
        labelWidth: 'auto', // 100px and so on || auto

        tagName: 'el-radio', // el-radio el-radio-button
        model: 'radio1', // 限制只有一层
        disabled: false, // 是否禁用

        labelOptionName: 'radioLabelOptions', // 此组单选框的数据key

        changeName: '', // 值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）绑定的函数名称

        className: '',
        border: false,
      },
      {
        span: 12,
        prop: 'checkbox1',
        label: '多选',
        size: 'mini', // medium / small / mini
        labelWidth: 'auto', // 100px and so on || auto

        tagName: 'el-checkbox', // el-checkbox el-checkbox-button
        model: 'checkbox1', // 限制只有一层
        disabled: false, // 是否禁用

        labelOptionName: 'checkboxLabelOptions', // 此组单选框的数据key

        changeName: '', // 值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）绑定的函数名称

        className: '',
        border: false,
      },
      {
        span: 12,
        prop: 'radio1',
        label: '单选按钮组',
        size: 'mini', // medium / small / mini
        labelWidth: 'auto', // 100px and so on || auto

        tagName: 'el-radio-button', // el-radio el-radio-button
        model: 'radio1', // 限制只有一层
        disabled: false, // 是否禁用

        labelOptionName: 'radioLabelOptions', // 此组单选框的数据key

        changeName: '', // 值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）绑定的函数名称

        className: '',
        border: false,
      },
      {
        span: 12,
        prop: 'checkbox1',
        label: '多选按钮组',
        size: 'mini', // medium / small / mini
        labelWidth: 'auto', // 100px and so on || auto

        tagName: 'el-checkbox-button', // el-checkbox el-checkbox-button
        model: 'checkbox1', // 限制只有一层
        disabled: false, // 是否禁用

        labelOptionName: 'checkboxLabelOptions', // 此组单选框的数据key

        changeName: '', // 值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）绑定的函数名称

        className: '',
        border: false,
      },
      {
        span: 24,
        tagName: 'div', // el-button el-button-group span div 按钮 按钮组 只是为了布局的
        child: [
          {
            tagName: 'el-button',
            name: '提交',
            type: 'primary', // primary '' info warning danger success text
            circle: false, // 圆形按钮
            icon: '', // 图标
            round: false, // 圆角按钮
            plain: false, // 朴素按钮
            disabled: false, // 是否禁用
            loading: false,
            size: 'medium', // medium / small / mini
            clickName: 'onSubmit', // 调用的方法名
            className: '',
          },
          {
            // 以下才是输入组件信息
            tagName: 'span',
            name: ' ',
            style: {
              padding: '0px 0px',
            },
            className: '',
          },
          {
            tagName: 'el-button',
            name: '重置',
            type: '', // primary '' info warning danger success text
            circle: false, // 圆形按钮
            icon: '', // 图标
            round: false, // 圆角按钮
            plain: false, // 朴素按钮
            disabled: false, // 是否禁用
            loading: false,
            size: 'medium', // medium / small / mini
            clickName: 'onReset', // 调用的方法名
            className: '',
          },
        ],
      },

    ],
  },

};
