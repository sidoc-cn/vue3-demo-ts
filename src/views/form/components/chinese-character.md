```html
    <el-form  ref="ruleFormRef" :model="formData" :rules="formRules">
        <el-form-item label="" prop="ChineseCharacter">
            <el-input v-model="" clearable />
        </el-form-item>
    </el-form>
```

```javascript
    const formRules = reactive<FormRules>({
        ChineseCharacter:[
            { pattern: regular.ChineseCharacter, trigger: 'blur',message: "只能输入汉字" },
            { required: true, message: '请输入' },
        ],
    });
```