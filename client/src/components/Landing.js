import { Outlet} from "react-router-dom";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    // BreadcrumbSeparator,
    Button
  } from '@chakra-ui/react'
import { ChevronRightIcon} from "@chakra-ui/icons"



function Landing(){
    return (
        <div>

        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
        <BreadcrumbItem p={4}>
        <Button colorScheme='blue' p={4}><BreadcrumbLink href='/'>Restaurants</BreadcrumbLink></Button>
        </BreadcrumbItem>

        <BreadcrumbItem>
        <BreadcrumbLink href='/pizzas'>Pizza</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
        </BreadcrumbItem>
        </Breadcrumb>
        <Outlet></Outlet> 
        </div>
    )
}
export default Landing