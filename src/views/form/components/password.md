```html
    <el-form  ref="ruleFormRef" :model="formData" :rules="formRules">
        <el-form-item label="" prop="password">
            <el-input type="password" placeholder="6-16英文+数字" show-password v-model="" clearable />
        </el-form-item>
    </el-form>
```

```javascript
    const formRules = reactive<FormRules>({
        password:[
            { pattern: regular.passwordA, trigger: 'blur',message: "6-16数字+英文" },
            { required: true, message: '请输入' },
        ],
    });
```