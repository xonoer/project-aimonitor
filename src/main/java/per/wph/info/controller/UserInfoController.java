package per.wph.info.controller;

import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import per.wph.common.ApiResult;
import per.wph.common.controller.BaseController;
import per.wph.common.generator.ApiResultGenerator;
import per.wph.common.generator.RandomGenerator;
import per.wph.info.model.UserInfo;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Date;
import java.util.List;

@Controller
@RequestMapping("/user")
public class UserInfoController extends BaseController {

    @RequestMapping(value="/sendIdenCode")
    public @ResponseBody ApiResult sendIdenCode(HttpSession httpSession){
        int iden = RandomGenerator.idenCode();
        System.out.println("iden==" + iden);
        httpSession.setAttribute(IDCODE, iden);
        httpSession.setAttribute(IDCODE_AVAILABLE_TIME, System.currentTimeMillis() + OVERTIME);
        return ApiResultGenerator.succssResult(iden);
    }

    /**
     * 接收注册请求
     * 提交的表单数据有:
     * username:String
     * password:String
     * iden:String
     */
    @RequestMapping(value="/regist")
    public @ResponseBody ApiResult regist(HttpSession httpSession, HttpServletRequest request){
        Long currentTime = System.currentTimeMillis();
        if(httpSession.getAttribute(IDCODE_AVAILABLE_TIME)!=null
                && currentTime>(Long)httpSession.getAttribute(IDCODE_AVAILABLE_TIME)){
            return ApiResultGenerator.errorResult("验证码超时",null);
        }
        UserInfo userInfo = new UserInfo();
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        userInfo.setUsername(username);
        userInfo.setPassword(password);
        userInfo.setCreateTime(new Date(System.currentTimeMillis()));
        Integer iden = Integer.valueOf(request.getParameter("iden"));
        Integer idencode = (Integer) httpSession.getAttribute(IDCODE);
        if(idencode.equals(iden)){
            userService.userRegist(userInfo);
            userInfo.setLastLoginTime(new Date());
            userService.updateUserInfo(userInfo);
            return ApiResultGenerator.succssResult("注册成功");
        }
        return ApiResultGenerator.errorResult("注册失败",null);
    }
    @RequestMapping(value = "/checkLogin")
    @ResponseBody
    public ApiResult checkuser(String username, String password, boolean rememberMe){
        if(loginUtil.login(username,password,rememberMe)){
            //如果login方法没有抛出异常，则会继续执行下面更新登录信息的方法
            UserInfo userInfo = userService.getUserInfoByUsername(username);
            Long loginTime = System.currentTimeMillis();
            userInfo.setLastLoginTime(new Date(loginTime));
            userService.updateUserInfo(userInfo);
            return ApiResultGenerator.succssResult("登录成功");
        }
        return ApiResultGenerator.errorResult("登录失败,请检查账号或者密码",null);
    }

    @RequestMapping(value = "/permit/get",method = {RequestMethod.GET})
    public @ResponseBody UserInfo getUserInfo(Long id){
        return userService.getUserInfoById(id);
    }

    @RequestMapping(value = "/permit/getAll")
    public @ResponseBody List<UserInfo> getAll(){
        return userService.getAll();
    }

}
