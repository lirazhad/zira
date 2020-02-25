export const UserItem  = ({style, avatar, firstName, lastName, email}) => (

<View style={[styles.container, style]}>
    {/* avatar */}
    <View>
        
    </View>
    {/* first name */}
    <View>
        
    </View>
    {/* last name */}
    <View>
        
    </View>
    {/* email */}
    <View>
        
    </View>
</View>
)

const styles = StyleSheet.create({
    container: {
      marginTop: '5%',
      height: '100%',
      width: '100%',
    },
    textContainer: {
      marginTop: '10%',
      paddingHorizontal: spacing.PAGE_MARGIN_HORIZONTAL,
      flexDirection: 'column',
      justifyContent: 'center',
      height: '30%',
    },
    textStyle: {
      marginTop: spacing.ELEMENT_VERTICAL_SPACE,
      textAlign: 'center',
    },
    animation: {
      alignSelf: 'center',
      height: '68%',
    },
  })