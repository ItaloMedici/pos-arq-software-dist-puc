package aspect

@Aspect
@Component
class LoggerAfterRunAspect {
    @Around('@annotatation(aspect.Log)')
    open fun log(joinPoint: ProceedingJoinPoint): Any? {
        print("passed here!")
        return joinPoint.proceed()
    }
}