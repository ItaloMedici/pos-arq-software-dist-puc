package reflection

import kotlin.reflect.full.declaredMemberProperties
import kotlin.reflect.full.findAnnotation

@Target(AnnotationTarget.PROPERTY)
@Retention(AnnotationRetention.RUNTIME)
annotation class Log(val level: String = "")

data class Movie(@Log("TEST") val title: String)


fun main(args: Array<String>) {
    val movie = Movie("Harry Potter")
    val titleMovie = movie::class.declaredMemberProperties.first { it.name == "title" }
    val logAnnotation = titleMovie.findAnnotation<Log>()
    println("Value of log: " + logAnnotation?.level)
}