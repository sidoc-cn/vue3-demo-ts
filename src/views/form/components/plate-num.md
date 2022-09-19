```html
    <el-form  ref="ruleFormRef" :model="formData" :rules="formRules">
        <el-form-item label="" prop="plateNum">
            <el-input v-model="" clearable />
        </el-form-item>
    </el-form>
```

```javascript
    const formRules = reactive<FormRules>({
        plateNum:[
            { pattern: regular.plateNum, trigger: 'blur',message: "请输入正确的车牌号" },
            { required: true, message: '请输入' },
        ],
    });
```